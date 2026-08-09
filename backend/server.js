require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Health Check API
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "GST Billing API is running",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`GST Billing API running on http://localhost:${PORT}`);
});