import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
    type Query {
        greeting : String
    } 
`;

const resolvers = {
  Query: {
    greeting: () => "Hello world wie gehts Ihnen",
  },
};

const server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
const { url } = await startStandaloneServer(server, { listen: { port: 9000 } });

console.log(`Server running at ${url}`);

// const info = await startStandaloneServer(server, { listen: { port: 9000 } });

// console.log(`Server running at ${info.url}`);
