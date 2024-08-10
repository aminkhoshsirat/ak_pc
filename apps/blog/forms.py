from django import forms


class CommentForm(forms.Form):
    text = forms.CharField(widget=forms.Textarea(), required=True)
    replay_to = forms.IntegerField(required=False)
