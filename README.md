# Vue Project

This is a Vue 3 project using **Vite** as the build tool and **Pinia** for state management. It uses **json-server** to simulate a backend, making it easy to develop and test without requiring a real API. The application is built using TypeScript, and we are using **Element Plus** for UI components.

## Technologies Used

- **Vue 3**: The frontend framework for building the user interface.
- **Vite**: A fast and modern build tool for Vue 3 applications.
- **Pinia**: State management library for Vue 3.
- **json-server**: Mock backend to simulate API requests.
- **TypeScript**: A superset of JavaScript, adding static typing to the codebase.
- **Element Plus**: A UI library with various ready-to-use components.
- **Axios**: Promise-based HTTP client for making API requests.
- **TailwindCSS**: Utility-first CSS framework for styling.

## Project Setup

Follow these steps to get the project up and running:

### 1. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
Start the Backend Server
Run the following command to start the mock backend server with json-server:

npm run backend

 Start the Frontend Development Server
After the backend is running, you can start the frontend application by running:

bash
npm run dev

This will start the Vue 3 application and open it in your browser at http://localhost:3000.

Backend API Endpoints
Here are the available API endpoints:

GET /orders: Retrieve all orders.
GET /orders/:id: Get a single order by ID.
POST /orders: Create a new order.
PUT /orders/:id: Update an order by ID.
DELETE /orders/:id: Delete an order by ID.
This backend is powered by json-server and uses a db.json file for storing data.

Available Scripts
In the project directory, you can run the following commands:

Development: npm run dev – Starts the development server and opens the app in the browser.
Build: npm run build – Builds the project for production.
Preview: npm run preview – Previews the production build.
Type-Check: npm run type-check – Runs TypeScript type checking on the codebase.
Lint: npm run lint – Runs ESLint to check for code quality issues.
Format: npm run format – Formats the code using Prettier.
Backend: npm run backend – Starts the mock backend using json-server.
Troubleshooting
If you encounter any issues, here are some common solutions:

Backend not starting: Make sure the db.json file exists and json-server is installed. Run npm install if necessary.
Frontend not loading: Ensure that the development server is running by executing npm run dev.
API not responding: Check that the backend server is running and accessible at http://localhost:5000.
TypeScript errors: Run npm run type-check to check for TypeScript errors and resolve them.
Code formatting issues: Use npm run format to format the codebase with Prettier.

License
This project is licensed under the MIT License – see the LICENSE file for details.

Contact
For any questions or support, feel free to contact the project maintainer:

Your Name – azamatrozumow@gmail.com