import "dotenv/config.js";
import cors from "cors";
import express from "express";
import contactRouter from "./routes/contact.js";

const app = express();
const port = Number(process.env.PORT || 5000);
const allowedOrigin = process.env.ALLOWED_ORIGIN || "http://localhost:5174";

app.use(cors({ origin: allowedOrigin }));
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.use("/api/contact", contactRouter);

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
