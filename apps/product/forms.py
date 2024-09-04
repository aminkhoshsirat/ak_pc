from django import forms
from .models import *


class SearchForm(forms.Form):
    search = forms.CharField(max_length=10000, widget=forms.Textarea)


class ProductCommentForm(forms.Form):
    text = forms.CharField(widget=forms.TextInput())
    positive_votes = forms.JSONField()
    negative_votes = forms.JSONField()
    grade = forms.IntegerField()
