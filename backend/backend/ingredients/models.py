from django.db import models

class Ingredient(models.Model):
    name = models.CharField(max_length=255)
    quantity = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name