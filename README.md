# Animal Project

This is a Django and React application that allows you to manage information about various animals. The project provides a RESTful API built with Django REST Framework to list, create, update, and delete animals and their species. The front-end is developed using React to display the list of animals retrieved from the API.

## Setup Instructions

### Prerequisites

- Python 3.x
- Node.js (with npm)

### Backend (Django)

1. Clone the repository:

```bash
git clone <repository_url>
cd animal_project
```


Create and activate a virtual environment (optional but recommended):

```bash
python -m venv env
source env/bin/activate
```

Install the Python dependencies:

```bash
pip install -r requirements.txt
```

Apply the database migrations:
```bash
python manage.py migrate
```

Create a superuser to access the Django admin interface:
```bash
python manage.py createsuperuser
```
Add some animals to your database:
```bash
python manage.py add_animals
```

Run the Django development server:

```bash
python manage.py runserver
```

The Django backend should now be running on http://localhost:8000/.

### Frontend (React)

Change directory to the frontend:
```bash
cd animal_project/frontend/animal-frontend
```


Install the npm packages:

```bash
npm install
```


Run the React development server:
```bash
npm start
```


The React frontend should now be running on http://localhost:3000/.

Usage
Access the Django admin interface to manage animals, species, and other data:

URL: http://localhost:8000/admin/
Log in using the superuser credentials created earlier.
Access the React frontend to view the list of animals retrieved from the API:

URL: http://localhost:3000/
Use the provided API endpoints to perform CRUD operations on animals and species:

Animals API:

List/Create: http://localhost:8000/animals/
Retrieve/Update/Delete: http://localhost:8000/animals/<id>/
Species API:

List/Create: http://localhost:8000/species/
Retrieve/Update/Delete: http://localhost:8000/species/<id>/
