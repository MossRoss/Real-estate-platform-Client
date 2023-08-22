# Real Estate App

This is a full-stack real estate application built using the PERN stack (PostgreSQL, Express.js, React, Node.js). The app allows users to browse properties for sale and rent, add new properties, update existing properties, and delete properties.

## Features

Browse properties for sale and rent.
Add new properties with details such as title, description, price, and location.
Update property details, including title, description, price, and location.
Delete properties from the list.

## Technologies Used

- **Frontend:**

  - React: JavaScript library for building user interfaces.
  - Bootstrap: CSS framework for styling and responsiveness.
  - Axios: Promise-based HTTP client for making API requests.

- **Backend:**
  - Express.js: Web application framework for Node.js.
  - PostgreSQL: Relational database management system.
  - Node.js: JavaScript runtime environment.

## Setup and Installation

1. **Clone the repository:**

`[git clone](https://github.com/MossRoss/Real-estate-platform-Client)`
`cd Real-estate-platform-Client`

2. **Install dependencies:**
   For both frontend and backend:

`npm install`

3. **Set up the database:**
   Create a PostgreSQL database.
   Configure your database connection in server.js.

4. **Run the app:**
   Start the backend server:

`cd server`
`npm run dev`

Start the frontend development server:

`cd client`
`npm run start`

The app will be accessible at http://localhost:3000 locally.

## Usage

- Browse through the list of properties on the homepage.
- Click on a property to view its details.
- Use the "Add Property" button to add a new property with details.
- Click on the "Edit" button to update property details.
- Click on the "Delete" button to remove a property.

## Deployment

The frontend of this app is deployed on Netlify, and the backend is deployed on Render.

- **Frontend:** The React frontend is deployed on Netlify and can be accessed at [https://your-netlify-app-url.netlify.app](https://-netlify-app-url.netlify.app).

- **Backend:** The Express.js backend is deployed on Render and can be accessed at [https://real-estste.onrender.com/](https://real-estste.onrender.com/).

Both deployments are set up for automatic updates upon changes in the respective GitHub repositories.
