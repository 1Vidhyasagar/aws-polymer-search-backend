const SearchResult = require("../models/SearchResult");

const search = async (req, res) => {
  try {
    const query = req.query.q;
    const results = await SearchResult.find({
      title: { $regex: query, $options: "i" },
    });

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { search };
