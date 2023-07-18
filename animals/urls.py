from django.urls import path
from .views import AnimalListCreateView, AnimalRetrieveUpdateDeleteView, SpeciesListCreateView, SpeciesRetrieveUpdateDeleteView

urlpatterns = [
    path('animals/', AnimalListCreateView.as_view(), name='animal-list-create'),
    path('animals/<int:pk>/', AnimalRetrieveUpdateDeleteView.as_view(), name='animal-retrieve-update-delete'),
    path('species/', SpeciesListCreateView.as_view(), name='species-list-create'),
    path('species/<int:pk>/', SpeciesRetrieveUpdateDeleteView.as_view(), name='species-retrieve-update-delete'),
]
