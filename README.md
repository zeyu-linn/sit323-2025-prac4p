# Calculator Microservice

A simple calculator microservice built with Node.js and Express that provides basic arithmetic operations through a REST API.

## Features

- Addition
- Subtraction
- Multiplication
- Division
- Error handling for invalid inputs and division by zero

## Prerequisites

- Node.js (https://nodejs.org/)
- npm (comes with Node.js)

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```
npm install
```

## Running the Service

Start the server with:

```
npm start
```

The server will run on port 3000 by default (or the port specified in the PORT environment variable).

## API Endpoints

### Welcome Page

```
GET /
```

Returns a welcome message and information about available endpoints.

### Addition

```
GET /api/add?num1=x&num2=y
```

Adds two numbers and returns the result.

### Subtraction

```
GET /api/subtract?num1=x&num2=y
```

Subtracts the second number from the first and returns the result.

### Multiplication

```
GET /api/multiply?num1=x&num2=y
```

Multiplies two numbers and returns the result.

### Division

```
GET /api/divide?num1=x&num2=y
```

Divides the first number by the second and returns the result. Returns an error if attempting to divide by zero.

## Error Handling

The API returns appropriate error messages with corresponding HTTP status codes:

- 400 Bad Request: For invalid inputs or division by zero
- 500 Internal Server Error: For unexpected errors during calculation

## Example Usage

### Addition

Request:
```
GET /api/add?num1=5&num2=3
```

Response:
```json
{
  "operation": "addition",
  "num1": 5,
  "num2": 3,
  "result": 8
}
```

### Division by Zero

Request:
```
GET /api/divide?num1=5&num2=0
```

Response:
```json
{
  "error": "Division by zero is not allowed."
}
```