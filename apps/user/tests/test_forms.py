from django.test import SimpleTestCase
from ..forms import *


class TestUserLoginForm(SimpleTestCase):
    def test_login_success(self):
        form = UserLoginForm(data={'phone_or_email': 'aminkhoshsisrat1381@gmail.com', 'password': 'am145'})
        self.assertTrue(form.is_valid())

    def test_blank_password(self):
        form = UserLoginForm(data={'phone_or_email': 'aminkhoshsisrat1381@gmail.com', 'password': ''})
        self.assertEqual(len(form.errors), 1)

    def test_blank_phone_and_email(self):
        form = UserLoginForm(data={'phone_or_email': '', 'password': 'am145'})
        self.assertEqual(len(form.errors), 1)

    def test_blank_form(self):
        form = UserLoginForm(data={})
        self.assertEqual(len(form.errors), 2)


class TestUserRegisterForm(SimpleTestCase):
    def test_register_success(self):
        form = UserRegisterForm(data={'phone': '09909794694', 'email': 'amin@gmail.com',
                                      'fullname': 'Amin Khosh Sirat', 'password': 'Am1245789',
                                      'confirm_password': 'Am1245789'})
        self.assertTrue(form.is_valid())

    def test_blank_form(self):
        form = UserRegisterForm(data={})
        self.assertEqual(len(form.errors), 5)

    def test_password_not_equal(self):
        form = UserRegisterForm(data={'phone': '09909794694', 'email': 'amin@gmail.com',
                                      'fullname': 'Amin Khosh Sirat', 'password': 'Am1245789',
                                      'confirm_password': 'Am12457lkd'})
        self.assertEqual(len(form.errors), 1)

    def test_password_is_digit(self):
        form = UserRegisterForm(data={'phone': '09909794694', 'email': 'amin@gmail.com',
                                      'fullname': 'Amin Khosh Sirat', 'password': '123456789',
                                      'confirm_password': '123456789'})
        self.assertEqual(len(form.errors), 1)

    def test_password_is_alpha(self):
        form = UserRegisterForm(data={'phone': '09909794694', 'email': 'amin@gmail.com',
                                      'fullname': 'Amin Khosh Sirat', 'password': 'hhuAhbidg',
                                      'confirm_password': 'hhuAhbidg'})
        self.assertEqual(len(form.errors), 1)

    def test_password_is_lower(self):
        form = UserRegisterForm(data={'phone': '09909794694', 'email': 'amin@gmail.com',
                                      'fullname': 'Amin Khosh Sirat', 'password': 'hhuuhbidg12345',
                                      'confirm_password': 'hhuuhbidg12345'})
        self.assertEqual(len(form.errors), 1)

    def test_password_is_less_8(self):
        form = UserRegisterForm(data={'phone': '09909794694', 'email': 'amin@gmail.com',
                                      'fullname': 'Amin Khosh Sirat', 'password': 'AS12345',
                                      'confirm_password': 'AS12345'})
        self.assertEqual(len(form.errors), 1)
