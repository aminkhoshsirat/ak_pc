import json
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import UserChatModel, UserChatRoomModel
import urllib.parse as urlparse
from apps.user.models import UserModel
from asgiref.sync import sync_to_async
from .tasks import send_chat_file
from django.utils.timezone import now


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = self.room_name

        # Join room group
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await UserChatRoomModel.objects.filter(id=self.room_group_name).aupdate(online=False, date=now())
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    # Receive message from WebSocket
    async def receive(self, text_data):
        data = json.loads(text_data)
        user = self.scope['user']
        message = data['message']
        query = self.scope['query_string'].decode('utf-8')
        params = urlparse.parse_qs(query)
        replay = params.get('replay_id', [None])[0]

        replay_object = await UserChatModel.objects.filter(id=replay, chat_room_id=self.room_group_name).afirst()

        if user.is_authenticated:
            await UserChatModel.objects.acreate(chat_room_id=self.room_group_name, user=user,
                                                replay=replay_object, text=message)
        else:
            await UserChatModel.objects.acreate(chat_room_id=self.room_group_name, ip=self.scope["client"][0],
                                                replay=replay_object, text=message)
        # Send message to room group
        await self.channel_layer.group_send(
            self.room_group_name, {"type": "chat.message", "message": message, "sender": data["sender"]}
        )

    async def chat_message(self, event):
        message = event["message"]
        sender = event["sender"]

        # Send message to WebSocket
        await self.send(text_data=json.dumps({"message": message, "sender": sender}))


class FileConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = self.room_name

        # Join room group
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await UserChatRoomModel.objects.filter(id=self.room_group_name).aupdate(online=False, date=now())
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    # Receive message from WebSocket
    async def receive(self, text_data):
        data = json.loads(text_data)
        file = data["file"]
        name = str(data["name"]).replace('C:\\fakepath\\', '')
        user = self.scope['user']
        query = self.scope['query_string'].decode('utf-8')
        params = urlparse.parse_qs(query)
        replay = params.get('replay_id', [None])[0]
        replay_object = await UserChatModel.objects.filter(id=replay, chat_room_id=self.room_group_name).afirst()

        if user.is_authenticated:
            send_chat_file.delay(room_group_name=self.room_group_name, user=user.id, ip=None,
                                 replay_object=replay_object, file=file, name=name)
        else:
            send_chat_file.delay(room_group_name=self.room_group_name, user=None, ip=self.scope["client"][0],
                                 replay_object=replay_object, file=file, name=name)
        await self.channel_layer.group_send(
            self.room_group_name, {"type": "chat.message", "message": name, "sender": data["sender"]}
        )

    # Receive message from room group
    async def chat_message(self, event):
        message = event["message"]
        sender = event["sender"]

        # Send message to WebSocket
        await self.send(text_data=json.dumps({"message": message, "sender": sender}))
