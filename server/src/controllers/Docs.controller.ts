import { Request, Response } from "express";
import { google } from "googleapis";
import stream from 'stream'
import documentModel from "../models/Document.model";

const authCache = new google.auth.GoogleAuth({
    keyFile: `${__dirname}/proyecto-documentos-metlife-6851438d0bf4.json`,
    scopes: "https://www.googleapis.com/auth/drive",
});

export const createDocument = async (req: Request, res: Response) => {
    console.log(`${__dirname}/proyecto-documentos-metlife-6851438d0bf4.json`)
        
    const file = req.files[0]
    const auth = JSON.parse(req.body.auth)
    const document = JSON.parse(req.body.document)

    const content = 'New Document Content'
    
    console.log(auth)

    const bufferStream = new stream.PassThrough();
    bufferStream.end(Uint8Array.from(Buffer.from(content, "binary")));
    try {
    const driveService = google.drive({
        version: 'v3',
        auth: authCache

    })
    const fileMetadata = {
        name: 'angelito',
        parents: ['1b0ae0dRh__PqkIoEccyoPn6iRAJ1R-mu'], // Change it according to your desired parent folder id
        mimeType: "application/vnd.google-apps.document"
      };
    
      const media = {
        mimeType: 'application/vnd.google-apps.document'/* file.mimetype */,
        body: bufferStream/* toStream(file.buffer) */,
      };
        const response = await driveService.files.create({
            requestBody: fileMetadata,
            /* media: media, */
            fields: 'id'
        })
    
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

export const newDocument = async (req: Request, res: Response) => {
    const {userId} = req.body
    try {
        const driveService = google.drive({
            version: 'v3',
            auth: authCache

        })
        const fileMetadata = {
            name: 'New Document',
            parents: ['1b0ae0dRh__PqkIoEccyoPn6iRAJ1R-mu'],
            mimeType: "application/vnd.google-apps.document"
        };
        
        const response = await driveService.files.create({
            requestBody: fileMetadata,
            fields: 'id'
        })

        console.log(response)

        const countDocuments = await documentModel.countDocuments()

        const documentCreated = await documentModel.create({
            name: `New Document ${countDocuments + 1}`,
            index: countDocuments + 1,
            url: `https://docs.google.com/document/d/${response.data.id}/edit`,
            type: 'Google Document',
            enabled: true,
            deleted: false,
            usersAssigned: [userId]
        })

        console.log(documentCreated)
    
        res.status(200).json({msg: 'documentCreated', document: documentCreated})
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

export const getDocuments = async (req: Request, res: Response) => {
    try {
        const documents = await documentModel.find()
        console.log(documents)
        res.status(200).json({msg: 'ok', documents: documents})
    } catch (error) {
        console.log(error)
    }
}