
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from ingredients.models import Ingredient

class IngredientModelTests(APITestCase):

    def test_create_ingredient(self):
        url = reverse('ingredient-list')
        data = {'name': 'Salt', 'quantity': '1 tbsp', 'description': 'Fine sea salt'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Ingredient.objects.count(), 1)
        self.assertEqual(Ingredient.objects.get().name, 'Salt')

    def test_retrieve_ingredients_list(self):
        Ingredient.objects.create(name='Salt', quantity='1 tbsp', description='Fine sea salt')
        Ingredient.objects.create(name='Pepper', quantity='1 tsp', description='Freshly ground black pepper')
        url = reverse('ingredient-list')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

    def test_retrieve_specific_ingredient(self):
        ingredient = Ingredient.objects.create(name='Sugar', quantity='2 cups', description='Granulated sugar')
        url = reverse('ingredient-detail', args=[ingredient.id])
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], 'Sugar')

    def test_update_ingredient(self):
        ingredient = Ingredient.objects.create(name='Sugar', quantity='2 cups', description='Granulated sugar')
        url = reverse('ingredient-detail', args=[ingredient.id])
        data = {'name': 'Sugar', 'quantity': '1 cup', 'description': 'Updated quantity'}
        response = self.client.put(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        ingredient.refresh_from_db()
        self.assertEqual(ingredient.quantity, '1 cup')

    def test_delete_ingredient(self):
        ingredient = Ingredient.objects.create(name='Sugar', quantity='2 cups', description='Granulated sugar')
        url = reverse('ingredient-detail', args=[ingredient.id])
        response = self.client.delete(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Ingredient.objects.count(), 0)
