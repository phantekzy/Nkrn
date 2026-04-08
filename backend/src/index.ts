import "dotenv/config";
import express from "express";
import cors from "cors";
import inventoryRoutes from "./routes/inventoryRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("api/inventory", inventoryRoutes);
