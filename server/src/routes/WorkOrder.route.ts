import { createWOrder, editWOrder, getWOrders } from '../controllers/WO.controller'
import {Router} from 'express'

const router = Router()

router.get('/getWOrders', getWOrders)
router.post('/createWOrder', createWOrder)
router.post('/editWOrder', editWOrder)

export default router