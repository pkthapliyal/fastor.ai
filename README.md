# fastor.ai
## Overview

This project implements a simple API for managing employee registration, login, and handling enquiries.

## API Endpoints

1. **Employee Registration:**
   - `POST /employee/register` - Registers a new employee with the provided name, email, and password.

2. **Employee Login:**
   - `POST /employee/login` - Authenticates an employee with the provided email and password, returning a JWT token on successful login.

3. **Enquiry Submission:**
   - `POST /enquiry/add` - Submits a new enquiry with the given name, email, and course interest.

4. **Unclaimed Enquiries Retrieval:**
   - `GET /enquiry/all-enquiry` - Retrieves all unclaimed enquiries.

5. **Individual Employee Enquiries Retrieval:**
   - `GET /enquiry/my-enquiry` - Retrieves all enquiries claimed by the authenticated employee.

6. **Enquiry Claim:**
   - `POST /enquiry/claim/:enquiryId` - Claims an unclaimed enquiry by the authenticated employee using the enquiry ID.

## Authentication

For routes requiring authentication, include the JWT token in the request headers using the "Authorization" field.

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up a MongoDB database and update the connection string in the configuration file.
4. Run the application using `npm run server`.

## Dependencies

- Node.js
- Express.js
- MongoDB
- Mongoose
- Bcrypt
- JSON Web Token (JWT)
- dotenv

## Usage

1. Register an employee using the `/employee/register` endpoint.
2. Login with the registered employee using the `/employee/login` endpoint.
3. Submit an enquiry using the `/enquiry/add` endpoint.
4. Retrieve unclaimed enquiries with the `/enquiry/all-enquiry` endpoint.
5. Retrieve individual employee enquiries using the `/enquiry/my-enquiry` endpoint.
6. Claim an enquiry using the `/enquiry/claim/:enquiryId` endpoint.