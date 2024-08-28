import "dotenv/config";
import express from "express";
import cors from "cors";

import { router } from "./routes";
import dbConnect from "./config/mongo";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
dbConnect().then(() => console.log("DB connected"));

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
