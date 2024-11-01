import { Inventory } from "../interfaces/Inventory.interface";
import inventoryModel from "../models/Inventory.model";

export const createInventory = async (inventory: Inventory) => {
    const inventoryCreated = await inventoryModel.create(inventory)
    return inventoryCreated
}