# Ally - AI Chatbot

Ally is a simple AI-powered chatbot where users can ask gender-based educational questions. This project is a practice implementation of **Node.js** and **Google's Gemini AI** to handle chatbot functionality.

## 🚀 Features
- **Chat with Gemini AI**: Users can send messages and receive AI-generated responses.
- **Gender-Based Education**: Responses are tailored based on the user's gender identity.
- **Simple Backend with Express.js**: Uses Node.js and Express to handle chat requests.
- **Frontend for User Interaction**: A basic UI to input messages and select gender.

## 🛠 Tech Stack
- **Backend**: Node.js, Express.js
- **AI Model**: Gemini AI (Google Generative AI API)
- **Frontend**: HTML, JavaScript
- **Other Tools**: CORS, dotenv

## 📌 How to Run

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/ally-chat.git
cd ally-chat
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a **.env** file in the root directory and add your Gemini API key:
```sh
GEMINI_API_KEY=your-api-key-here
```

### 4️⃣ Start the Server
```sh
node server.js
```
Server will run at **http://localhost:5000**.

### 5️⃣ Open Frontend
Open `landing.html` in a browser and start chatting! 🎉

## 📌 API Endpoint
- `POST /chat`: Sends a message to the chatbot and gets a response.
  
  **Request Body:**
  ```json
  {
    "message": "What is mental health?",
    "gender": "woman"
  }
  ```
  
  **Response:**
  ```json
  {
    "reply": "Mental health includes emotional, psychological, and social well-being..."
  }
  ```

## 💡 Future Improvements
- Store chat history for context-based responses.
- Add authentication for personalized experiences.
- Improve UI with a better chat interface.

## 🎯 Purpose
This project was created as a **practice application of Node.js skills**, with a focus on integrating AI chat models. It's a simple demonstration of how **Express.js and AI APIs** can be combined for real-world applications.

---


