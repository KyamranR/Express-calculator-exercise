const express = require("express");

const app = express();

const {
  calculateMean,
  calculateMedian,
  calculateMode,
} = require("./calculator");

app.use((req, res, next) => {
  if (!req.query.nums) {
    return res.status(400).json({ error: "nums are required." });
  }

  const nums = req.query.nums.split(",").map((n) => {
    const parsed = parseFloat(n);
    if (isNaN(parsed)) {
      return res.status(400).json({ error: `${n} is not a number` });
    }
    return parsed;
  });
  req.nums = nums;
  next();
});

app.get("/mean", (req, res) => {
  const mean = calculateMean(req.nums);
  return res.json({ operation: "mean", value: mean });
});

app.get("/median", (req, res) => {
  const median = calculateMedian(req.nums);
  return res.json({ operation: "median", value: median });
});

app.get("/mode", (req, res) => {
  const mode = calculateMode(req.nums);
  return res.json({ operation: "mode", value: mode });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(3000, () => {
  console.log("Server running");
});
