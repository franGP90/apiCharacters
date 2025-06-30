import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./schema.ts";
import {  } from "./types.ts";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers.ts";


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);

console.info(`Server ready at ${url}`);


