import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./../redux/actions/user";
import { getAccounts } from "./../redux/actions/account";
import { IoWalletOutline } from "react-icons/io5";
import { BsCreditCard } from "react-icons/bs";
import Link from "next/link";
import Account from "../ui/account";
import Head from "next/head";

const Accounts = () => {
   const dispatch = useDispatch();
   const accounts = useSelector((state) => state.user.user.accounts);
   console.log("lmao", accounts);

   return (
      <div>
         <Head>
            <title>Accounts | Banky</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Layout>
            <div className="mt-4 mx-3 ">
               <div className="grid grid-cols-12">
                  <div className="col-span-8">
                     <h1 className="text-3xl">Accounts</h1>
                     <div className="space-y-6 mt-5 mx-3">
                        {accounts &&
                           accounts.map((account) => (
                              <div
                                 key={account.id}
                                 className="border-gray-700 bg-gray-200 p-2 rounded-lg space-y-4"
                              >
                                 <div className="space-y-3">
                                    <h1>IBAN: {account.iban}</h1>
                                    <h1>
                                       Balance:{" "}
                                       <span className="font-bold">
                                          ${account.balance}
                                       </span>
                                    </h1>
                                    <h1 className="text-sm">
                                       Branch: no.99 Union Street, Baltimore
                                    </h1>
                                 </div>
                                 <div className="flex justify-between mx-3">
                                    <Link href={`/account/${account.id}`}>
                                       <a className="hover:bg-red-200">
                                          <div className="flex space-x-2">
                                             {" "}
                                             <IoWalletOutline
                                                className="my-auto "
                                                size={20}
                                             />
                                             <h1 className="text-md">
                                                See details
                                             </h1>
                                          </div>
                                       </a>
                                    </Link>
                                    <div className="flex space-x-1.5">
                                       <BsCreditCard className="my-auto " />{" "}
                                       <button
                                          onClick={() => {
                                             setPicked(3);
                                          }}
                                       >
                                          <h1 className="text-md">Cards(3)</h1>{" "}
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           ))}
                     </div>
                  </div>{" "}
               </div>{" "}
            </div>
         </Layout>
      </div>
   );
};

export default Accounts;
