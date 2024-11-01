import { findWOrders, reWriteNewWOrder, writeNewWOrder } from "../services/WO.services";
import { Request, Response } from "express";

export const getWOrders = async (req: Request, res: Response) => {
    const clients = await findWOrders()
    res.status(200).json({state: true, clients})
}

export const createWOrder = async (req: Request, res: Response) => {
    const newWOrder: any = req.body
    const response = await writeNewWOrder(newWOrder)
    res.status(200).json({state: true, response})
}

export const editWOrder = async (req: Request, res: Response) => {
    const editedWOrder: any = req.body
    const response = await reWriteNewWOrder(editedWOrder)
    res.status(200).json({state: true, response})
}

