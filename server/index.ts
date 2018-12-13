import { ApolloServer, gql } from "apollo-server"
import {resolvers} from "./resolvers"
import {typeDefs} from "./schema"


const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Server ready @ ${url}`)
})