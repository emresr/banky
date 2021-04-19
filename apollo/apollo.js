import {
   ApolloProvider,
   ApolloClient,
   InMemoryCache,
   HttpLink,
} from "@apollo/client";
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

const getClient = (token) => {
   let headers = undefined;
   if (token) {
      headers = {
         authorization: ` ${token}`,
      };
   }

   const wsLink = process.browser
      ? new WebSocketLink({
           uri: `ws://localhost:4000/graphql`,
           options: {
              reconnect: true,
           },
        })
      : null;

   const httplink = new HttpLink({
      uri: "http://localhost:4000",
      headers,
   });

   const cache = new InMemoryCache();

   const link = process.browser
      ? split(
           ({ query }) => {
              const { kind, operation } = getMainDefinition(query);
              return (
                 kind === "OperationDefinition" && operation === "subscription"
              );
           },
           wsLink,
           httplink
        )
      : httplink;

   const client = new ApolloClient({
      ssrMode: typeof window === "undefined",
      cache: cache,
      link: link,
      name: "banky",
      version: "0.1",
      queryDeduplication: false,
      defaultOptions: {
         watchQuery: {
            fetchPolicy: "cache-and-network",
         },
      },
   });

   return client;
};

export default getClient;
