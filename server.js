// backend/server.js
import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js'; // Note the .js extension in ES modules
import profileRoutes from "./routes/profile.js";
import transactionRoutes from "./routes/transaction.js";
import nftRoutes from "./routes/nft.js";
import health from './routes/health.js';




dotenv.config();
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const app = express();
const port = process.env.PORT || 4000;

/* ✅ CORS — FIRST */
app.use(cors({
  origin: 'https://nft-marketplace-my-frontend.vercel.app', // Your Vercel URL
  credentials: true, // Required for cookies/sessions/authorization headers
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'pgy-no-browser-warning']
}));


app.use(express.json());

// Auth routes
app.use('/auth', authRoutes);
app.use("/profile", profileRoutes);
app.use("/transactions", transactionRoutes);
app.use("/nfts", nftRoutes);
app.use("/health", health);


app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
