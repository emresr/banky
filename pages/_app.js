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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkToken } from "../redux/actions/user";

function MyApp({ Component, pageProps }) {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(checkToken(localStorage.getItem("token")));
      console.log(localStorage.getItem("token"));
   }, []);

   return (
      <ApolloProvider client={getClient()}>
         <Component {...pageProps} />
      </ApolloProvider>
   );
}

export default wrapper.withRedux(MyApp);
