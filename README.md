
# ✉️ Email Writer Assistant

An **AI-powered email writing assistant** that helps you generate professional and context-aware email replies instantly using the **Google Gemini API**.

This is a **full-stack application** consisting of a **Spring Boot backend**, **React frontend**, and a **Chrome Extension** for seamless Gmail integration.

---

## 🚀 Features

* ✨ Generate smart, contextual email replies
* 🎯 Choose tone (Professional, Casual, etc.)
* ⚡ Real-time response generation
* 🌐 Multiple interfaces:

  * Web App (React)
  * Gmail Integration (Chrome Extension)
* 🔄 Fast API communication using WebClient
* 🧠 Powered by Google Gemini AI

---

## 🏗️ Architecture

```
email-writer-sb/        → Spring Boot Backend (Port 8080)
email-writer-react/     → React Frontend (Vite)
email-writer-ext/       → Chrome Extension
```

---

## 🧩 Components Overview

### 🔹 1. Backend – `email-writer-sb`

**Tech Stack:**

* Java 25
* Spring Boot 4.0.5
* Spring WebFlux (Reactive)
* Lombok

**Key Responsibilities:**

* Handle API requests
* Communicate with Google Gemini API
* Generate AI-based email replies

**Endpoint:**

```
POST /api/email/generate
```

**Request Body:**

```json
{
  "emailContent": "Original email text",
  "tone": "professional"
}
```

---

### 🔹 2. Frontend – `email-writer-react`

**Tech Stack:**

* React 19
* Vite
* Material UI (MUI)
* Axios

**Features:**

* Email input field
* Tone selection dropdown
* Loading indicators
* Error handling UI

---

### 🔹 3. Chrome Extension – `email-writer-ext`

**Tech Stack:**

* Manifest V3
* Vanilla JavaScript

**Features:**

* Injects "AI Reply" button in Gmail
* Reads email content directly from UI
* Sends request to backend
* Auto-fills generated reply

---

## 📁 Project Structure

```
email-writer-sb/
├── src/main/java/com/email/writer/
│   ├── EmailWriterSbApplication.java
│   ├── app/
│   │   ├── EmailGeneratorController.java
│   │   ├── EmailGeneratorService.java
│   │   └── EmailRequest.java
│   └── config/
│       └── WebClientConfig.java
├── resources/
│   └── application.properties
├── pom.xml
└── README.md
```

```
email-writer-react/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── assets/
├── public/
├── package.json
├── vite.config.js
└── eslint.config.js
```

```
email-writer-ext/
├── manifest.json
├── content.js
└── content.css
```

---

## ⚙️ Prerequisites

Make sure you have the following installed:

* ☕ Java 17+ (recommended 21+)
* 🟢 Node.js 18+
* 📦 npm / yarn
* 🔑 Google Gemini API Key
* 🌐 Chrome Browser

---

## 🛠️ Setup Instructions

### 🔹 1. Backend Setup

```bash
cd email-writer-sb
mvn clean install
mvn spring-boot:run
```

Configure your API key in:

```properties
# application.properties
gemini.api.url=YOUR_API_URL
gemini.api.key=YOUR_API_KEY
```

---

### 🔹 2. Frontend Setup

```bash
cd email-writer-react
npm install
npm run dev
```

---

### 🔹 3. Chrome Extension Setup

1. Go to `chrome://extensions/`
2. Enable **Developer Mode**
3. Click **Load unpacked**
4. Select `email-writer-ext` folder

---

## 🔄 Workflow

1. User writes or opens an email
2. Clicks **"AI Reply"**
3. Extension extracts email content
4. Sends request to backend
5. Backend calls Gemini API
6. AI-generated reply is returned
7. Reply is auto-filled in Gmail compose box

---

## 📦 Dependencies

### Backend

* Spring Boot
* Spring WebFlux
* Lombok
* WebClient

### Frontend

* React
* Material UI
* Axios
* Vite

### Extension

* Chrome Manifest V3


