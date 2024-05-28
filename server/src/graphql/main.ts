import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

import { ApolloServer } from "@apollo/server";
import { resolvers } from "./resolvers";
// load schema from graphql files
const schema = loadSchemaSync("./graphql-schemas/*.graphql", {
  loaders: [new GraphQLFileLoader()],
});

// create apollo server
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

// export server
export { server ,schema };
