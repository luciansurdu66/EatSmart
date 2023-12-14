from rest_framework import generics
from .models import Ingredient
from .serializers import IngredientSerializer

class IngredientListCreate(generics.ListCreateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

class IngredientRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
