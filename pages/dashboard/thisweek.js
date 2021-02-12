import Layout from "../../components/dashboard/layout";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

function ThisWeek() {
  return (
    <div>
      <Head>
        <title>This Week | banky</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="p-5">
          <h1 className="text-left"> Today 10 December 2021 </h1>
          <div className="h-240 flex items-center ">
            <div className="flex-1 max-w-4xl mx-auto p-10 ">
              <ul className="grid grid-cols-2 gap-8">
                <li className="bg-green-400 rounded-lg shadow-xl">
                  <div className="h-24">
                    <h1> Today's Amount $119</h1>
                  </div>{" "}
                </li>
                <li className="bg-green-400 rounded-lg shadow-xl">
                  <div className="h-24">
                    <h1>Total This Week $1398</h1>
                  </div>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default ThisWeek;
