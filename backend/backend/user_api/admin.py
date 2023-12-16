# user_api/admin.py

from django.contrib import admin
from .models import AppUser
from ingredients.models import Ingredient

admin.site.register(Ingredient)
admin.site.register(AppUser)
