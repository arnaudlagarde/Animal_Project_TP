from django.core.management.base import BaseCommand
from animals.models import Animal, Species

class Command(BaseCommand):
    help = 'Adds animals to the database.'

    def handle(self, *args, **kwargs):
        # Create species if not exists
        suricate_species, _ = Species.objects.get_or_create(name='Suricate')
        lion_species, _ = Species.objects.get_or_create(name='Lion')
        elephant_species, _ = Species.objects.get_or_create(name='Elephant')
        giraffe_species, _ = Species.objects.get_or_create(name='Giraffe')
        zebra_species, _ = Species.objects.get_or_create(name='Zebra')

        # Create animals
        Animal.objects.create(
            name='Timon',
            age_maximum=10,
            average_weight=0.5,
            scientific_name='Suricata suricatta',
            species=suricate_species,
        )

        Animal.objects.create(
            name='Pumbaa',
            age_maximum=15,
            average_weight=200,
            scientific_name='Phacochoerus africanus',
            species=suricate_species,
        )

        Animal.objects.create(
            name='Simba',
            age_maximum=20,
            average_weight=180,
            scientific_name='Panthera leo',
            species=suricate_species,
        )

        # Add more animals of different species
        Animal.objects.create(
            name='Nala',
            age_maximum=18,
            average_weight=160,
            scientific_name='Panthera leo',
            species=lion_species,
        )

        Animal.objects.create(
            name='Mufasa',
            age_maximum=25,
            average_weight=200,
            scientific_name='Panthera leo',
            species=lion_species,
        )

        Animal.objects.create(
            name='Rafiki',
            age_maximum=40,
            average_weight=80,
            scientific_name='Papio cynocephalus',
            species=suricate_species,
        )

        Animal.objects.create(
            name='Dumbo',
            age_maximum=70,
            average_weight=2500,
            scientific_name='Elephas maximus',
            species=elephant_species,
        )

        Animal.objects.create(
            name='Hathi',
            age_maximum=60,
            average_weight=4500,
            scientific_name='Elephas maximus',
            species=elephant_species,
        )

        Animal.objects.create(
            name='Zini',
            age_maximum=12,
            average_weight=60,
            scientific_name='Giraffa camelopardalis',
            species=giraffe_species,
        )

        Animal.objects.create(
            name='Melman',
            age_maximum=20,
            average_weight=1200,
            scientific_name='Giraffa camelopardalis',
            species=giraffe_species,
        )

        Animal.objects.create(
            name='Alex',
            age_maximum=18,
            average_weight=200,
            scientific_name='Panthera leo',
            species=lion_species,
        )

        Animal.objects.create(
            name='Gloria',
            age_maximum=25,
            average_weight=1400,
            scientific_name='Hippopotamus amphibius',
            species=suricate_species,
        )

        Animal.objects.create(
            name='Marty',
            age_maximum=15,
            average_weight=800,
            scientific_name='Equus quagga',
            species=zebra_species,
        )

        Animal.objects.create(
            name='Stefano',
            age_maximum=20,
            average_weight=900,
            scientific_name='Equus quagga',
            species=zebra_species,
        )

        # Add more animals of different species
        # ...

        self.stdout.write(self.style.SUCCESS('Animals added successfully.'))
