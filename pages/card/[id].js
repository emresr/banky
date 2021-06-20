import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { getCard } from "./../../redux/actions/card";
import Link from "next/link";
import Permissions from "../../ui/permissions";
import CreditCard from "../../ui/card";
import Head from "next/head";
const Account = () => {
   const dispatch = useDispatch();
   const card = useSelector((state) => state.card);
   console.log("lmao", card);

   useEffect(() => {
      dispatch(getCard(6));
   }, []);

   return (
      <div>
         <Head>
            <title>Card | Banky</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Layout>
            <div className="mt-4 ml-3 w-1/2">
               {card.card && (
                  <h1 className="text-3xl">
                     <CreditCard />
                  </h1>
               )}
               <div className="my-5 space-y-2">
                  {" "}
                  <div className="flex justify-between">
                     <h1 className="text-2xl  font-bold my-auto">
                        Permissions
                     </h1>
                     <button className="font-bold p-1 px-2  bg-yellow-500 rounded hover:bg-yellow-400 transition duration-300">
                        Save
                     </button>
                  </div>{" "}
                  {card.card.atmdomestic && (
                     <div className=" space-y-5">
                        <Permissions
                           name="ATM"
                           domestic={card.card.atmdomestic}
                           abroad={card.card.atmabroad}
                        />
                        <Permissions
                           name="Shopping"
                           domestic={card.card.shoppingdomestic}
                           abroad={card.card.shoppingabroad}
                        />
                        <Permissions
                           name="E-commerce"
                           domestic={card.card.ecommercedomestic}
                           abroad={card.card.ecommerceabroad}
                        />
                     </div>
                  )}
               </div>
            </div>
         </Layout>
      </div>
   );
};

export default Account;
