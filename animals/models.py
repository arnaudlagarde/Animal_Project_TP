from django.db import models

class Species(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Animal(models.Model):
    name = models.CharField(max_length=100)
    age_maximum = models.PositiveIntegerField()
    average_weight = models.FloatField()
    scientific_name = models.CharField(max_length=100)
    species = models.ForeignKey(Species, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
