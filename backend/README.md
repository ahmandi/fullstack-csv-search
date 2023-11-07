# PartnersData Loader Documentation

PartnersData Loader is a web application with a backend that complements the frontend. This documentation provides an overview of the backend's features, usage instructions, and testing guidelines.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Usage](#usage)
- [Testing](#testing)

### Getting Started

To get started with PartnersData Loader backend, follow these steps:

Clone the GitHub repository to your local machine:

### `git clone <repository-url>`

Navigate to the "backend" directory:

### `cd backend`

Install the necessary dependencies:

### `npm install`

Start the backend application:

### `npm run dev`

The backend opens at http://localhost:3000.

### Features

PartnersData Loader backend includes the following features:

**CSV Data Handling**: The backend handles CSV data, enabling the frontend to display and search it efficiently.

**Search Endpoint**: The backend provides an API endpoint for searching within the loaded CSV data.

**Error Handling**: Clear and user-friendly error handling is implemented.

### Usage

**CSV Data Handling**: The backend processes and stores the uploaded CSV data.

**Search Endpoint**: The backend offers an API endpoint for searching within the CSV data. Use this endpoint to search for specific data within the loaded CSV file.

**Error Handling**: If an error occurs, an error message will be provided for clear communication.

### Testing

PartnersData Loader backend includes automated tests to ensure its functionality and reliability. To run the tests, use the following command in the "backend" directory:

### `npm run test`
