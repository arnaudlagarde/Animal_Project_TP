from rest_framework import generics
from .models import Animal, Species
from .serializers import AnimalSerializer, SpeciesSerializer


class AnimalListCreateView(generics.ListCreateAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer


class AnimalRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer


class SpeciesListCreateView(generics.ListCreateAPIView):
    queryset = Species.objects.all()
    serializer_class = SpeciesSerializer


class SpeciesRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Species.objects.all()
    serializer_class = SpeciesSerializer
