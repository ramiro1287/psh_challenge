## Installation

### Clone the repository  move to the repo "cd challenge", open a terminal and then execute "docker-compose up"

### To migrate DB: docker exec server python manage.py migrate

### To populate DB, enter to the container shell and execute:
- from hackathon.factories import migrate_db
- migrate_db()

### Frontend url: http://0.0.0.0:3000

### Change .env.example ---> .env
