import { Inventory } from "../interfaces/Inventory.interface";
import { createInventory } from "../services/Inventory.services";
import { Request, Response } from "express";

export const newInventory = async (res: Response, req: Request) => {
    const newInventory = req.body as Inventory
    const inventoryCreated = await createInventory(newInventory)
    res.status(200).json({
        state: true,
        inventoryCreated
    })
}