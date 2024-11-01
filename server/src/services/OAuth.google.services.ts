import { UserGoogle, UserProject } from '../interfaces/User.interface';
import userModel from '../models/User.model';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import { __ } from 'i18n';
import { HttpException } from '../exceptions/HttpException';
import { secretKey } from '../configs/env';
import { Role } from '@/interfaces/Role.interface';
import { DataStoredInToken, TokenData } from '@/interfaces/Auth.interface';

const client = new OAuth2Client();


export const OAuth = async (credential: string, client_id: string | string[]) => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: client_id,
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        return payload
    } catch (err) {
        console.log(err)
        throw Error('error')
    }
}

export const loginUserGoogle = async (userGoogle: UserGoogle) => {
    const locale = userGoogle.language
    try {
        const findUser: UserProject = await userModel.findOneAndUpdate({ email: userGoogle.email }, {image: userGoogle.image}, {new: true}).populate('roles').populate('organizations')
        if (!findUser) {
            console.log(__({ phrase: 'Email {{email}} not found', locale }, { email: userGoogle.email }))
            return {message: __({ phrase: 'Email {{email}} not found', locale }, { email: userGoogle.email }), status: 410,state: false}
        }

        console.log(findUser.roles)
        
        const role: Role = findUser.roles[0] as Role
        if (role.name === 'SuperAdmin') {
                    
            const token = createToken(findUser, 86400)
            const cookie = createCookie(token)
    
        
            return { cookie, findUser, token, message: 'login ok', status: 200, state: true }
        } else {
            if (findUser) {
            
                const token = createToken(findUser, 86400)
                const cookie = createCookie(token)
        
            
                return { cookie, findUser, token }
            } else {
                throw new HttpException(410, __({ phrase: 'organization not user', locale }, { email: userGoogle.email }))
            }
        }    
    
    } catch (err) {
        console.log(err)
        throw Error('error')
    }
}

const createToken = (user: UserProject, expiresIn = 3600) => {
    const dataStoredInToken: DataStoredInToken = { _id: user._id } // user._id, [organizationId, resources]
    return { expiresIn, token: jwt.sign(dataStoredInToken, secretKey, { expiresIn }) }
}

const verifyToken = (token: string, ignoreExpiration = false) => {
    return jwt.verify(token, secretKey, { ignoreExpiration }) as DataStoredInToken
}

const createCookie = (tokenData: TokenData) => {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`
}