Email Writer Assistant
An AI-powered email writing assistant that helps you draft professional and effective emails quickly and easily using Google Gemini API. This project consists of three integrated components: a Spring Boot backend, a React frontend, and a Chrome extension.

📋 Project Overview
Email Writer Assistant is a full-stack application that leverages AI to generate contextual email replies. It provides multiple interfaces:

Backend API - Spring Boot REST service that communicates with Google Gemini API
React Web Application - Interactive UI for generating email replies
Chrome Extension - Seamless integration with Gmail for in-browser email composition

🏗️ Architecture
email-writer-sb/        → Spring Boot Backend (Port 8080)
email-writer-react/     → React Frontend (Vite)
email-writer-ext/       → Chrome Extension

Components
1. email-writer-sb (Spring Boot Backend)
Java 25 with Spring Boot 4.0.5
REST API for email generation
Integration with Google Gemini API
WebClient for reactive HTTP requests
Lombok for reduced boilerplate
Key Features:

POST /api/email/generate - Generates email replies based on input content and tone
2. email-writer-react (React Frontend)
React 19 with Vite bundler
Material-UI (MUI) components for professional UI
Axios for API communication
Built with ESLint for code quality

Key Features:

- Email content input field
- Tone selection dropdown
- Real-time loading states
- Error handling
  
3. email-writer-ext (Chrome Extension)
Manifest V3 compatible
Integrates with Gmail interface
Content script for DOM manipulation
Communicates with backend API
🚀 Getting Started
Prerequisites
Java 25 - For backend
Node.js 18+ - For React frontend
npm or yarn - Package manager
Google Gemini API Key - For AI capabilities
Chrome/Chromium - For extension

📁 Project Structure
email-writer-sb/
├── src/
│   ├── main/
│   │   ├── java/com/email/writer/
│   │   │   ├── EmailWriterSbApplication.java
│   │   │   ├── app/
│   │   │   │   ├── EmailGeneratorController.java
│   │   │   │   ├── EmailGeneratorService.java
│   │   │   │   └── EmailRequest.java
│   │   │   └── config/
│   │   │       └── WebClientConfig.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
├── pom.xml
└── README.md

email-writer-react/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── assets/
├── public/
├── package.json
├── vite.config.js
└── eslint.config.js

email-writer-ext/
├── manifest.json
├── content.js
└── content.css

📦 Dependencies
Backend
Spring Boot 4.0.5
Spring WebFlux (Reactive)
Lombok
WebClient (for API calls)
Frontend
React 19
Material-UI (MUI) v9
Axios
Vite
Extension
Chrome Manifest V3
