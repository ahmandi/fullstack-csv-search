# PartnersData Loader Documentation

PartnersData Loader is a web application that allows users to upload and search for data within a CSV file. This documentation provides an overview of the app's features, usage instructions, and testing guidelines.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Usage](#usage)
- [Testing](#testing)

## Getting Started

To get started with PartnersData Loader, follow these steps:

Clone the GitHub repository to your local machine:

### `git clone <repository-url>`

Navigate to the "frontend" directory:

### `cd frontend`

Install the necessary dependencies:

### `npm install`

Start the frontend application:

### `npm run dev`

Access the application in your web browser at http://localhost:4000.

## Features

PartnersData Loader includes the following features:

**File Upload**: Users can select a CSV file from their local machine and upload it to the application.

**Search Bar**: The app provides a search bar for users to search for specific data within the loaded CSV file.

**Card Display**: The loaded CSV data is displayed as cards on the website. Each card represents a single row of the CSV file.

**Responsive Design**: The app is designed to work well on both desktop and mobile devices.

**Error Handling**: Clear and user-friendly error handling is implemented.

## Usage

### Upload a CSV File:

Click on the "Choose File" button.
Select a valid CSV file from your local machine.

**Search for Data**: Use the search bar to enter a search query.
The displayed cards will update to show only matching results.

**View Loaded Data**: The loaded CSV data is displayed as cards on the website.
Each card contains information from a single row of the CSV file.

**Error Handling**: If an error occurs, an error message will be displayed for clear communication.

## Testing

PartnersData Loader frontend includes automated tests to ensure its functionality and reliability. To run the tests, use the following command in the "frontend" directory:

### `npm run test`
