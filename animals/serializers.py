from rest_framework import serializers
from .models import Animal, Species


class SpeciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Species
        fields = '__all__'


class AnimalSerializer(serializers.ModelSerializer):
    species = SpeciesSerializer()

    class Meta:
        model = Animal
        fields = '__all__'

    def create(self, validated_data):
        species_data = validated_data.pop('species')
        species, _ = Species.objects.get_or_create(**species_data)
        animal = Animal.objects.create(species=species, **validated_data)
        return animal

    def update(self, instance, validated_data):
        species_data = validated_data.pop('species')
        species_serializer = self.fields['species']
        species = instance.species
        species = species_serializer.update(species, species_data)
        instance.species = species
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
