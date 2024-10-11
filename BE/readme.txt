locate to docker-compose file
run: docker compose up

------------------- pgAdmin 5434:5432

Open Brower then login with :

name: vibollong@gmail.com
pass: admin

---------------------Postgres: 50505:5050 : : Connect to db postgress

1. Right click on the server -> register -> server

- General : localhost 
- Connection : Host name / address: Put the name in the pgAdmin we create Ex:

=================
services:
  postgres:
    image: postgres:14
    environment:
      - POSTGRES_USER=admin
      - POSTGRES_PASSWORD=admin
      - POSTGRES_DB=phoneshop_night_db

=================

- Connection : postgres 
- Posrt : 5432 (use internal post from docker compose) 
- name : admin
- pass : admin

