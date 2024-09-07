from celery import shared_task
from .models import UserChatModel
import base64
from django.core.files.base import ContentFile


@shared_task
def send_chat_file(room_group_name, user, replay_object, file):
    format, imgstr = str(file).split(';base64,')
    ext = format.split('/')[-1]
    data = ContentFile(base64.b64decode(imgstr), name='temp.' + ext)
    UserChatModel.objects.create(chat_room_id=room_group_name, user_id=user,
                                  replay=replay_object, file=data)