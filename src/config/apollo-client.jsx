import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://informed-bee-49.hasura.app/v1/graphql",
  cache: new InMemoryCache({ addTypename: false }),
  headers: {
    "x-hasura-admin-secret":
      "lGyUxV3tHnPaEXkC76ZF3GJqkrBrB0F7ufVwmse97Or3dAfUERZle8rb7G8PbkYB",
  },
});
