import express from "express";
import morgan from "morgan";
import cors from "cors";

// Routes
import currencyRoutes from "./routes/currency.routes";

const app = express();

// Settings
app.set("port", 4000);

// Middlewares (funciones intermedias entre peticion y respuesta)
app.use(morgan("dev")); // List all the necessary info of the request
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/currency", currencyRoutes);

export default app;
