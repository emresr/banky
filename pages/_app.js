import "../styles/globals.css";
import Cookies from "js-cookie";

import {
   ApolloProvider,
   ApolloClient,
   InMemoryCache,
   HttpLink,
} from "@apollo/client";
import { wrapper } from "../redux/store";
import getClient from "../apollo/apollo";

function MyApp({ Component, pageProps }) {
   return (
      <ApolloProvider client={getClient()}>
         <Component {...pageProps} />
      </ApolloProvider>
   );
}

export default wrapper.withRedux(MyApp);
