import { Request, Response } from "express";
import * as inventoryService from "../services/inventoryService";

export const getInventory = async (req: Request, res: Response) => {
  try {
    const products = await inventoryService.fetchAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Errror" });
  }
};

export const updateStock = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string };
    const { quantity } = req.body;
    await inventoryService.adjustStock(id, quantity);
    res.json({ sucesss: true });
  } catch (error) {
    res.status(400).json({ error: "Update failed" });
  }
};
