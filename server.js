const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
require("dotenv").config();

const app = express();


// Middleware
app.use(cors());
app.use(cors());
app.use(express.json());

// Routes
const searchRoutes = require("./routes/searchRoutes");
app.use("/api/search", searchRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);


// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
