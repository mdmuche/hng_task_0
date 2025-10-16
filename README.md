# Profile — Stage 0 Task (HNGi13)

## Description
A simple RESTful API that returns my profile information along with a dynamic cat fact from the [Cat Facts API](https://catfact.ninja/fact).

## Endpoint
**GET** `/me`

### Example Response
```json
{
  "status": "success",
  "user": {
    "email": "youremail@example.com",
    "name": "Abula Martins Onyemuche",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T12:34:56.789Z",
  "fact": "Cats sleep for 70% of their lives."
}

```

## Tech Stack

- Node.js

- Express.js

- Axios

- Dotenv

- CORS

## Setup Instructions:

1. Clone the repository:

git clone https:git@github.com:mdmuche/hng_task_0.git
cd hng_task_0


2. Install dependencies:

npm install


3. Run the server:

node server.js


4. Visit https://hngtask0-production.up.railway.app/

Deployment

## Hosted on Railway
API Base URL: https://hngtask0-production.up.railway.app/me