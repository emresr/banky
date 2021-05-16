import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./../redux/actions/user";
import { getAccounts } from "./../redux/actions/account";

import { BsCreditCard } from "react-icons/bs";
import Link from "next/link";
import Account from "../ui/account";
const Accounts = () => {
   const dispatch = useDispatch();
   const accounts = useSelector((state) => state.user);
   console.log("lmao", accounts);

   useEffect(() => {
      dispatch(getUser(2));
   }, []);

   return (
      <Layout>
         <div className="mt-4 mx-3 ">
            <div className="grid grid-cols-12">
               <div className="col-span-8">
                  <h1 className="text-3xl">Accounts</h1>
                  <div className="space-y-6 mt-5 mx-3">
                     {accounts &&
                        accounts.user.accounts &&
                        accounts.user.accounts.map((account) => (
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
                                    <a>
                                       <div className="flex space-x-3">
                                          {" "}
                                          <BsCreditCard className="my-auto " />
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
                              <div className="bg-blue-500 w-6 h-6 absolute top-0 right-0 -mx-6 rounded-full" />
                           </div>
                        ))}
                  </div>
               </div>{" "}
            </div>{" "}
         </div>
      </Layout>
   );
};

export default Accounts;
