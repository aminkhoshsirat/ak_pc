from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import UserModel as User
from utils.mailchimp import add_user_to_mailchimp

@receiver(post_save, sender=User)
def add_user_to_mailchimp_list(sender, instance, created, **kwargs):
    if created:
        try:
            add_user_to_mailchimp(instance.email, instance.fullname, instance.phone)
            print("Users added to Mailchimp successfully.")
        except Exception as e:
            print(f"Error adding user to Mailchimp: {e}")
