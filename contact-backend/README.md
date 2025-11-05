# Contact Backend Project

This project is a backend application for a website's contact page, built using Express.js, Node.js, and MongoDB. It provides endpoints for submitting and retrieving contact form submissions.

## Project Structure

```
contact-backend
├── src
│   ├── index.js               # Entry point of the application
│   ├── app.js                  # Middleware and route setup
│   ├── config
│   │   └── db.js              # MongoDB connection configuration
│   ├── controllers
│   │   └── contactController.js # Logic for handling contact submissions
│   ├── models
│   │   └── Contact.js          # Mongoose model for contact submissions
│   ├── routes
│   │   └── contact.js          # Routes for contact-related endpoints
│   ├── middlewares
│   │   └── validateRequest.js   # Middleware for validating requests
│   └── utils
│       └── logger.js           # Logger utility for logging messages
├── tests
│   └── contact.test.js         # Unit tests for contact functionality
├── .env.example                # Example environment variables
├── .gitignore                  # Files to ignore in Git
├── package.json                # npm configuration file
├── Dockerfile                  # Docker image build instructions
├── docker-compose.yml          # Docker services configuration
└── README.md                   # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- Docker (optional, for containerization)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd contact-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` and update the values as needed.

### Running the Application

To start the application, run:
```
npm start
```

### Testing

To run the tests, use:
```
npm test
```

### Docker

To build and run the application using Docker, use:
```
docker-compose up --build
```

## Usage

The application exposes the following endpoints:

- `POST /contact`: Submit a new contact form.
- `GET /contact`: Retrieve all submitted contacts.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.