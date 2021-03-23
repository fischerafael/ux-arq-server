import express, { Express, Response } from 'express'
import cors from 'cors'

import { routes } from '../routes'

export const config = {
    json(app: Express) {
        app.use(express.json())
    },
    cors(app: Express) {
        app.use(cors())
    },
    routes(app: Express) {
        app.use(routes)
    },
    errors(app: Express) {
        app.use((e: Error, req: any, res: Response, next: any) => {
            if (e.message === 'missing fields')
                return res.status(400).json({ error: e.message })
            return res.status(500).json(e.message)
        })
    }
}
