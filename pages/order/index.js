import Layout from "../../components/dashboard/layout";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

function Dashboard() {
  return (
    <div>
      <Head>
        <title>Order | banky</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout className="">
        <div className="mt-2 ml-4">
          <h1 className="text-4xl"> Mocha x2</h1>
          <h1 className="text-xl">User: Emre</h1>
          <h1 className="text-xl">Pickup Date: 13:38</h1>
          <h1 className="text-xl">Price: $9.55</h1>

          <h1 className="text-xl">Estimated Time: 13:45</h1>
        </div>
      </Layout>
    </div>
  );
}
export default Dashboard;
