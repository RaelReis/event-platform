import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl7kxx8rd0yir01t71w0t69h1/master",
  cache: new InMemoryCache(),
});
