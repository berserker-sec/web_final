import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/dbConnection.js";
import infoRoutes from "./routes/infoRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

// .env dosyasını yükle
dotenv.config();

// Veritabanı bağlantısı
connectDb();

const app = express();
const port = process.env.PORT || 5454;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // React uygulamanızın URL'si
    credentials: true,
  })
);

app.use(express.json()); // JSON verilerini parse etmek için

// Test endpoint'i
app.get("/test", (req, res) => {
  res.json({ message: "API çalışıyor" });
});

// Routes
app.use("/api/info", infoRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || "Sunucu hatası",
  });
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: "Sayfa bulunamadı",
  });
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  app.close(() => {
    console.log("HTTP server closed");
    process.exit(0);
  });
});
