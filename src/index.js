require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const gadgetRoutes = require("./routes/gadgetRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/gadgets", gadgetRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
