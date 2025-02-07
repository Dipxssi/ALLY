require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = process.env.PORT || 5000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.use(cors());
app.use(express.json()); // Allows JSON request bodies

// ✅ Add a default route to prevent 404 errors
app.get("/", (req, res) => {
    res.send("Welcome to Ally AI Chat Server!");
});

// Chat route
app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;
    if (!userMessage) {
        return res.status(400).json({ error: "Message is required" });
    }

    try {
        const result = await model.generateContent(userMessage);
        const aiReply = result.response.text();

        res.json({ reply: aiReply });

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        res.status(500).json({ error: "Failed to get response from Gemini AI" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Ally server is running on http://localhost:${PORT}`);
});
