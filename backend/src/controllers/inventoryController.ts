import { Request, Response } from "express";
import * as inventoryService from "../services/inventoryService";

export const getInventory = async (req: Request, res: Response) => {
  try {
    const products = await inventoryService.fetchAllProducts();
    res.json(products);
  } catch (error) {}
};
