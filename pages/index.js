import Layout from "../components/layout/layout";

import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getLast10 } from "./../redux/actions/user";
import {
   LineChart,
   Line,
   CartesianGrid,
   XAxis,
   YAxis,
   Tooltip,
} from "recharts";
import Card from "../ui/card";
import moment from "moment";

function HomePage() {
   const dispatch = useDispatch();
   const user = useSelector((state) => state.user);
   // console.log("user", user);
   useEffect(() => {
      dispatch(getLast10(1));
   }, []);

   //chart
   let data = [];

   user.last10 &&
      user.last10.map(
         (transaction) =>
            transaction.amount &&
            data.push({
               name: moment(transaction.createdAt, "MM-DD"),
               uv: transaction.newSenderBalance,
            })
      );

   return (
      <div>
         <Head>
            <title>Banky</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Layout className="">
            <div className="grid grid-cols-12">
               <div className="mt-4 ml-3 col-span-8">
                  <h1 className="text-3xl ">Hello {user.user.email}</h1>
                  <h1>Your last visit: 12.12.2012</h1>
                  <h1>Weekly Activity</h1>
                  <LineChart
                     width={600}
                     height={300}
                     data={data}
                     margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                     className="mt-10"
                  >
                     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                     <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                     <XAxis dataKey="name" />
                     <YAxis />
                     <Tooltip />
                  </LineChart>{" "}
               </div>
               <div className="col-span-4 space-y-3 mx-4">
                  <h1>Cards</h1>
                  {user.user.accounts &&
                     user.user.accounts.map((account) =>
                        account.cards.map((card) => <Card key={card.id} />)
                     )}
               </div>
            </div>
         </Layout>
      </div>
   );
}
export default HomePage;
