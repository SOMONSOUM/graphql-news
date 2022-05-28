import { AuthResolver } from './resolver/Auth/LoginResolver'
import { UserResolver } from './resolver/User/UserResolver'
import { SchemaLoader } from './SchemaLoader'

export const typeDefs = SchemaLoader()

export const resolvers = [UserResolver, AuthResolver]
