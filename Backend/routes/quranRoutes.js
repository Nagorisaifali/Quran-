
const express = require("express");
const axios = require("axios");
const router = express.Router();

// Get all Surahs
router.get("/surahs", async (req, res) => {
  try {
    const response = await axios.get("https://api.alquran.cloud/v1/surah");
    res.json(response.data.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch surahs" });
  }
});


// Get Surah by number (Arabic)
router.get("/surah/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.alquran.cloud/v1/surah/${req.params.id}/ar`
    );
    res.json(response.data.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch surah" });
  }
});

module.exports = router;
