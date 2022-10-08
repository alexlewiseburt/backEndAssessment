const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getFortune,
  getEntries,
  createEntry,
  updateEntry,
  deleteEntry,
} = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/entries", getEntries);
app.post("/api/entries", createEntry);
app.put("/api/entries/:index", updateEntry);
app.delete("/api/entries/:index", deleteEntry);

app.listen(4000, () => console.log("Server running on 4000"));
