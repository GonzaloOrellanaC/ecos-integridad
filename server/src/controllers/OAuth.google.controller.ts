import { OAuth, loginUserGoogle } from "../services/OAuth.google.services";
import { Request, Response } from "express";

export const OAuthClientApp = async (req: Request, res: Response) => {
    const { credential, client_id } = req.body;
    try {
        const response = await OAuth(credential, client_id)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const LoginClientApp = async (req: Request, res: Response) => {
    const { userGoogle } = req.body;
    try {
        const response = await loginUserGoogle(userGoogle)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error)
    }
}