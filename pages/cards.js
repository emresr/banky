import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import CreditCard from "../ui/card";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./../redux/actions/user";
import Link from "next/link";
import Head from "next/head";

const Cards = () => {
   const dispatch = useDispatch();
   const user = useSelector((state) => state.user);

   useEffect(() => {
      dispatch(getUser(2));
   }, []);

   return (
      <div>
         <Head>
            <title>Cards | Banky</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Layout>
            <div className="mt-4 ml-3">
               <div className=" w-1/2">
                  <div className="flex justify-between">
                     <h1 className="text-3xl">Cards</h1>
                     <Link href="/createcard">
                        <a className="p-2 bg-blue-500 rounded hover:bg-blue-400">
                           Create Card
                        </a>
                     </Link>
                  </div>
                  <div className="space-y-5 mt-4">
                     {user.user &&
                        user.user.accounts &&
                        user.user.accounts.map((account) =>
                           account.cards.map((card) => (
                              <div>
                                 <Link href={`/card/${card.id}`}>
                                    <a>
                                       <CreditCard />
                                    </a>
                                 </Link>
                              </div>
                           ))
                        )}
                  </div>
               </div>
            </div>
         </Layout>
      </div>
   );
};

export default Cards;
