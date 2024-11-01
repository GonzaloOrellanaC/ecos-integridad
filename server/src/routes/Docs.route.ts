import { createDocument, newDocument, getDocuments } from "../controllers/Docs.controller";
import { Router } from "express";

const router = Router()

router.post('/createDocument', createDocument)
router.post('/newDocument', newDocument)
router.post('/getDocuments', getDocuments)

export default router