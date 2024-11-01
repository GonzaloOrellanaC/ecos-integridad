import { OAuthClientApp, LoginClientApp } from "../controllers/OAuth.google.controller";
import { Router } from "express";

const router = Router()

router.post('/auth', OAuthClientApp)
router.post('/login', LoginClientApp)

export default router