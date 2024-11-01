import { Router } from "express";
import AuthRoute from "./Auth.route";
import OauthGoogleRoute from "./OAuth.google.route"
import DocsRoute from "./Docs.route"
import ClientRoute from "./Client.route"
import UsersRoute from './Users.route'
import RolesRoute from './Role.route'

const router = Router()

router.use('/api', AuthRoute)
router.use('/api/google', OauthGoogleRoute)
router.use('/api/docs', DocsRoute)
router.use('/api/client', ClientRoute)
router.use('/api/wo', ClientRoute)
router.use('/api/users', UsersRoute)
router.use('/api/roles', RolesRoute)

export default router