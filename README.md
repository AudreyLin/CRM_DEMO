# CRM_DEMO

Client Relationship Management Demo Project written in the MERN stack. 

## Feature Roadmap

- Landing Page
- Demo Login (with role-based access)
- Dashboard 
- Profile Management
- Leads List
- Leads (CRUD) management
- Clients List
- Clients management
- Sales Pipeline that tracks lead from lead generation to client
- Client Project/Product Management
- Client Customer Service & Communications Log
- Calendar Integration (PWA feature?)
- Task List w/ alerts for conversion management
- Contract management (per client)
- Project Scope & Estimator
- Project Logs
- Change Log and Sign Offs
- Billing & Invoicing
- Stripe API
- Encryption
- Validation
- Security
- User Stories
- UML


## Generate Favicons

1. [Generate your favicon files](https://realfavicongenerator.net/)
2. Extract the package download into "./frontend/public" directory
3. Insert the given code into the head section of the
   "./frontend/public/index.html" file

## DotEnv & Environment Variables

-[DotENV NPM](https://www.npmjs.com/package/dotenv) Create a .env file in
'/backend/config'. (be sure to add it to .gitignore).

## Install dependencies

```
npm install
cd frontend
npm install
```

## Run Project

### frontend

`npm run frontend`

### backend

`npm run server`

### dev Concurrently run front and back

`npm run dev`

## Proxying API requests

(Proxying API requests in
development)[https://create-react-app.dev/docs/proxying-api-requests-in-development/]