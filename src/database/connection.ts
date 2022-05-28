import Knex from 'knex'
import * as dotenv from 'dotenv'
dotenv.config()

const config = require('../../knexfile')[process.env.NODE_ENV || 'development']

const knex = Knex(config)
export default knex
