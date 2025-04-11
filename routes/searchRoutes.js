const express = require("express");
const router = express.Router();
const SearchResult = require("../models/SearchResult");
const verifyToken = require("../middleware/authMiddleware");

// @route   GET /api/search
// @desc    Search polymer results (protected route)
router.get("/", verifyToken, async (req, res) => {
  const { query } = req.query;

  try {
    const results = await SearchResult.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching search results" });
  }
});

module.exports = router;
