from rest_framework.serializers import ModelSerializer
from .models import *
from apps.user.serializers import UserSerializers


class BlogCategorySerializers(ModelSerializer):
    class Meta:
        model = BlogCategoryModel
        fields = '__all__'


class BlogKeyWordSerializers(ModelSerializer):
    class Meta:
        model = BlogKeyWordModel
        fields = '__all__'




class AutherFollowingSerializers(ModelSerializer):
    # auther_following = AutherSerializers(read_only=True, many=True)
    # user_following = UserSerializers(read_only=True, many=True)

    class Meta:
        model = AutherFollowingModel
        fields = '__all__'


class BlogSerializers(ModelSerializer):
    # auther_blogs = AutherSerializers(read_only=True, many=True)
    # category_blogs = BlogCategorySerializers(read_only=True, many=True)
    # blog_keywords = BlogKeyWordSerializers(read_only=True, many=True)

    class Meta:
        model = BlogModel
        fields = '__all__'


class AutherSerializers(ModelSerializer):
    auther_blogs = BlogSerializers(read_only=True, many=True)

    class Meta:
        model = BlogCategoryModel
        fields = '__all__'


class BlogLikeSerializers(ModelSerializer):
    blog_likes = BlogSerializers(read_only=True, many=True)
    user_blog_likes = UserSerializers(read_only=True, many=True)

    class Meta:
        model = BlogLikeModel
        fields = '__all__'


class BlogCommentSerializers(ModelSerializer):
    user_blog_comments = UserSerializers(read_only=True, many=True)

    class Meta:
        model = BlogCommentModel
        exclude = ['active']


class BlogViewSerializers(ModelSerializer):
    class Meta:
        model = BlogViewModel
        fields = '__all__'


class SuggestedBlogSerializers(ModelSerializer):
    class Meta:
        model = SuggestedBlogModel
        fields = '__all__'


class BannerBlogSerializers(ModelSerializer):
    class Meta:
        models = BannerBlogModel
        fields = '__all__'
