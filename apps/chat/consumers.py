import json
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import UserChatModel
import urllib.parse as urlparse
from apps.user.models import UserModel
from asgiref.sync import sync_to_async
from .tasks import send_chat_file


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = self.room_name

        # Join room group
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    # Receive message from WebSocket
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json["message"]
        user = self.scope['user']
        query = self.scope['query_string'].decode('utf-8')
        params = urlparse.parse_qs(query)
        replay = params.get('replay_id', [None])[0]

        replay_object = await UserChatModel.objects.filter(id=replay, chat_room_id=self.room_group_name).afirst()

        await UserChatModel.objects.acreate(chat_room_id=self.room_group_name, user=user,
                                            replay=replay_object, text=message)
        print(1)
        # Send message to room group
        await self.channel_layer.group_send(
            self.room_group_name, {"type": "chat.message", "message": message}
        )

    async def chat_message(self, event):
        message = event["message"]

        # Send message to WebSocket
        await self.send(text_data=json.dumps({"message": message}))


class FileConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = self.room_name

        # Join room group
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    # Receive message from WebSocket
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        print(2)
        file = text_data_json["file"]
        user = self.scope['user']
        query = self.scope['query_string'].decode('utf-8')
        params = urlparse.parse_qs(query)
        replay = params.get('replay_id', [None])[0]
        replay_object = await UserChatModel.objects.filter(id=replay, chat_room_id=self.room_group_name).afirst()

        send_chat_file.delay(self.room_group_name, user.id, replay_object, file)
        await self.channel_layer.group_send(
            self.room_group_name, {"type": "chat.message", "message": 'file'}
        )

    # Receive message from room group
    async def chat_message(self, event):
        message = event["message"]

        # Send message to WebSocket
        await self.send(text_data=json.dumps({"message": message}))