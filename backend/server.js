require("dotenv").config();

const express = require("express");
const connectDB = require("./src/config/db");

const customerRoutes = require("./src/routes/customerRoutes");
const productRoutes = require("./src/routes/productRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use("/api/customers", customerRoutes);
app.use("/api/products", productRoutes);

// Health Check API
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "GST Billing API is running",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});