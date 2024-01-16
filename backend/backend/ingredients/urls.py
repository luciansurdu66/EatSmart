from django.urls import path
from . import views

urlpatterns = [
    path('ingredients/', views.IngredientListCreate.as_view(), name='ingredient-list'),
    path('ingredients/<int:pk>/', views.IngredientRetrieveUpdateDestroy.as_view(), name='ingredient-detail'),
]
