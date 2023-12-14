# tests.py
from django.test import TestCase
from user_api.models import AppUser

class AppUserTests(TestCase):
    def setUp(self):
        self.user_data = {
            'email': 'test@example.com',
            'username': 'testuser',
            'password': 'testpassword',
        }

    def test_create_user(self):
        user = AppUser.objects.create_user(email=self.user_data['email'], username=self.user_data['username'], password=self.user_data['password'])
        self.assertEqual(user.email, self.user_data['email'])
        self.assertEqual(user.username, self.user_data['username'])
        self.assertTrue(user.check_password(self.user_data['password']))
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

    def test_create_superuser(self):
        superuser_data = {
            'email': 'admin@example.com',
            'username': 'admin',
            'password': 'adminpassword',
        }
        superuser = AppUser.objects.create_superuser(email=superuser_data['email'], username=superuser_data['username'], password=superuser_data['password'])
        self.assertEqual(superuser.email, superuser_data['email'])
        self.assertEqual(superuser.username, superuser_data['username'])
        self.assertTrue(superuser.check_password(superuser_data['password']))
        self.assertTrue(superuser.is_active)
        self.assertTrue(superuser.is_staff)
        self.assertTrue(superuser.is_superuser)

    def test_create_user_missing_email(self):
        with self.assertRaises(ValueError):
            AppUser.objects.create_user(username='testuser', password='testpassword')

    def test_create_user_missing_password(self):
        with self.assertRaises(ValueError):
            AppUser.objects.create_user(email='test@example.com', username='testuser')

    def test_create_superuser_missing_email(self):
        with self.assertRaises(ValueError):
            AppUser.objects.create_superuser(username='admin', password='adminpassword')

    def test_create_superuser_missing_password(self):
        with self.assertRaises(ValueError):
            AppUser.objects.create_superuser(email='admin@example.com', username='admin')

    def test_str_method(self):
        user = AppUser.objects.create_user(**self.user_data)
        self.assertEqual(str(user), self.user_data['username'])
