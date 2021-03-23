import express, { Express } from 'express'
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
    }
}
