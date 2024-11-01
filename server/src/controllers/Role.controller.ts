import { createRole, getRoles } from "../services/Role.services";
import { Request, Response } from "express";

export const saveRole = async (req: Request, res: Response) => {
    const {name, organizationId} = req.body
    const role = await createRole(name, organizationId)
    res.status(200).json({state: true, role})
}

export const getAllRoles = async (req: Request, res: Response) => {
    const roles = await getRoles()
    console.log(roles)
    res.status(200).json({state: true, roles})
}
