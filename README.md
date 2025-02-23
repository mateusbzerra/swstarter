# SWSTARTER

Live version: https://swstarter.vercel.app/ (Without BE analytics)

## How to run it
### Running with Docker (easiest way)
1. Make sure you have docker & docker cli installed in your machine.
2. Make sure docker is up and running
3. Then clone that repository to your machine
4. Under SWSTARTER folder run:
    ```
    docker-compose up --build
    ```
5. You should be able to run the backend under `http://localhost:3001` and the frontend under `http://localhost:3000`

### Running without Docker
1. Make sure you have docker & docker cli installed in your machine.
2. Make sure docker is up and running
3. Then clone that repository to your machine
4. Under SWSTARTER root folder navigate to `./backend` folder
    * Make sure you have a mongodb instance running
    * Make sure you have a redis instance running
    * Create a `.env` file under `./backend` folder with the required variables present in `.env.example` file.
    * Run `npm install` or `yarn install`
    * Run `npm run dev` or `yarn dev`
    * The backend should be running on `http://localhost:3001` or under a different port depending on which port you put on the `.env` file
5. Under SWSTARTER root folder, navigate to `frontend/`
    * Run `npm install` or `yarn install`
    * Run `npm run dev` or `yarn dev`
    * The frontend should be running on `http://localhost:3000`
6. Now is time to have fun exploring the application 🎉

## Available Routes
### Frontend
```
Homepage: /
Film page: /films/[film_id]
People page: /people/[people_id]
```
### Backend
```
[GET] Welcome route: /
[POST] Add new event to queue: /events
[GET] Show analytics: /analytics
```
