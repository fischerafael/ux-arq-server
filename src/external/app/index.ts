import express from 'express'
import { mongo } from '../database/mongo'
import { config } from './config'

mongo.connect()

export const app = express()

config.json(app)
config.cors(app)
config.routes(app)
