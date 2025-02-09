# DP ToDo List

## Project Structure
/DPTODOLIST
├── /frontend 
│   ├── /src 
│   │   ├── /components 
│   │   │   └── TaskItem.js  (Task item component)
|   |   |
│   │   ├── /screens 
│   │   │   └── HomeScreen.js (Main screen)
|   |   |
│   │   ├── /api
│   │   │   └── api.js (API functions)
|   |   |
│   │   ├── App.js (App entry point)
│   │   └── index.js (Main index file)
│   ├── package.json (Frontend dependencies)
|
├── /backend 
│   ├── db.js (MongoDB connection)
│   ├── index.js (Backend entry point)
│   ├── routes.js (API routes)
│   ├── package.json (Backend dependencies)
│   ├── .env (Backend environment variables)
│  
├── docker-compose.yml (Docker Compose config)
├── Dockerfile (Docker build file)
├── requirments.txt (installation + dependancies)
└── README.md  (Project documentation)



## ToDo List - Application Summary
The DP ToDo List application is a full-stack to-do list app built with React Native for the frontend and Node.js with Express for the backend. It uses MongoDB for data storage. The frontend allows users to view, create, update, and delete tasks, while the backend handles API requests and database interactions.