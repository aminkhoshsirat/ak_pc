from django.test import client, TestCase
from django.urls import reverse
from apps.panel.models import SiteDetailModel, FaqQuestionModel, ContactUsModel
from model_bakery import baker


class TestFaqsView(TestCase):
    def setUp(self):
        self.client = client.Client()
        FaqQuestionModel.objects.create(title='what is this test?',
                                        answer='its a test for view faq questiopn')

    def test_fag_GET(self):
        response = self.client.get(reverse('faq'))
        self.assertTemplateUsed(response, 'faq.html')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.context['questions'].count(), 1)


class TestContactUsView(TestCase):
    def setUp(self):
        self.client = client.Client()

    def test_contact_us_view_GET(self):
        baker.make(SiteDetailModel, logo='logo.png')
        response = self.client.get(reverse('contact_us'))
        self.assertTemplateUsed('contact-us.html')
        self.assertEqual(response.status_code, 200)
        self.assertNotEquals(response.context['site_detail'], None)

    def test_contact_us_view_POST_valid(self):
        response = self.client.post(reverse('contact_us'), data={'name': 'amin',
                                                                 'family_name': 'khosh sirat',
                                                                 'email': 'amin@gmail.com',
                                                                 'phone': '09909794694',
                                                                 'subject': 'test contact us view',
                                                                 'message': 'hello im here test the contact us view and'
                                                                            ' test is success'})
        self.assertEqual(response.status_code, 302)
        self.assertEqual(ContactUsModel.objects.count(), 1)
        self.assertRedirects(response, reverse('contact_us'))
