from django.db import models
from django_jalali.db import models as jmodels
from django.urls import reverse


class VideoCategoryModel(models.Model):
    title = models.CharField(max_length=10000)
    image = models.ImageField(upload_to='video/image')
    url = models.SlugField()
    base = models.ForeignKey('VideoCategoryModel', on_delete=models.CASCADE, related_name='category_child', null=True,
                             blank=True)

    def __str__(self):
        return self.title


class VideoModel(models.Model):
    title = models.CharField(max_length=10000)
    description = models.TextField()
    image = models.ImageField(upload_to='video/image')
    url = models.SlugField()
    category = models.ForeignKey(VideoCategoryModel, on_delete=models.DO_NOTHING, related_name='category_videos')
    video = models.FileField(upload_to='video')
    published_date = jmodels.jDateTimeField(auto_now=True)

    def get_absolute_url(self):
        return reverse('video:detail', args=[self.id])
