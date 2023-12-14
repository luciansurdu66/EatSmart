from django.test import TestCase
from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist

class AppUserModelTest(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(
            email='test@example.com',
            password='testpassword',
            username='testuser'
        )

    def test_create_user(self):
        self.assertTrue(isinstance(self.user, get_user_model()))
        self.assertEqual(self.user.email, 'test@example.com')
        self.assertEqual(self.user.username, 'testuser')
        self.assertTrue(self.user.check_password('testpassword'))

    def test_create_superuser(self):
        superuser = get_user_model().objects.create_superuser(
            email='admin@example1.com',
            password='adminpassword',
            username='testuser1'
        )
        self.assertTrue(superuser.is_superuser)
        self.assertTrue(superuser.is_staff)

    def test_str_method(self):
        self.assertEqual(str(self.user), 'testuser')

    def test_delete_user(self):
        user_to_delete = get_user_model().objects.create_user(
            email='delete@example.com',
            password='deletepassword',
            username='deleteuser'
        )
        
        # Retrieve the user_id using the appropriate attribute (e.g., user_id)
        user_id = user_to_delete.user_id
        
        user_to_delete.delete()
        
        # Attempt to retrieve the user after deletion
        try:
            deleted_user = get_user_model().objects.get(user_id=user_id)
        except ObjectDoesNotExist:
            deleted_user = None
        
        self.assertIsNone(deleted_user, "User should not exist after deletion")
