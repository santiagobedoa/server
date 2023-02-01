// Handle routesto DB
import { Router } from "express";
import { methods as currencyController } from "../controllers/currency.controller";

const router = Router();

router.get("/", currencyController.getTransactions);
router.post("/", currencyController.addTransaction);
router.get("/convert", currencyController.convertCurrency);

export default router;
