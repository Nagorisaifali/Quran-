
const express = require("express");
const cors = require("cors");
const quranRoutes = require("./routes/quranRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/quran", quranRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

