import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from './src/graphql/AppSchema'
import * as dotenv from 'dotenv'
dotenv.config()

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(process.env.PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
