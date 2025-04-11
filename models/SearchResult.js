const mongoose = require("mongoose");

const searchResultSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model(
  "SearchResult",
  searchResultSchema,
  "searchResults"
);
