import Layout from "../components/layout/layout";

import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./../redux/actions/user";
import CreditCard from "../ui/creditcard";

function HomePage() {
   const dispatch = useDispatch();
   const user = useSelector((state) => state.user);
   console.log("lmao", user);

   useEffect(() => {
      dispatch(getUser(1));
   }, []);

   return (
      <div>
         <Head>
            <title>banky</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Layout className="">
            <div className="grid grid-cols-12">
               <div className="mt-4 ml-3 col-span-8">
                  <h1 className="text-3xl ">Hello Emre</h1>
                  <h1>Your last visit: 12.12.2012</h1>
               </div>
               <div className="col-span-4">
                  <h1>Cards</h1>
                  <div>
                     <CreditCard name="Emre Sr" />
                  </div>
               </div>
            </div>
         </Layout>
      </div>
   );
}
export default HomePage;
