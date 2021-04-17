import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./../redux/actions/user";
import { BsCreditCard } from "react-icons/bs";
import Link from "next/link";
const Accounts = () => {
   const dispatch = useDispatch();
   const user = useSelector((state) => state.user);
   console.log("lmao", user.user);

   useEffect(() => {
      dispatch(getUser(2));
   }, []);
   const [isPicked, setIsPicked] = useState(true);
   return (
      <Layout>
         <div className="mt-4 mx-3 ">
            <div className="grid grid-cols-12">
               <div className="col-span-8">
                  <h1 className="text-3xl">Accounts</h1>
                  <div className="space-y-3 mt-5 mx-3">
                     {user.user.accounts &&
                        user.user.accounts.map((account) => (
                           <div className="border-gray-700 bg-gray-200 p-2 rounded-lg space-y-4">
                              <div>
                                 <h1>IBAN: {account.iban}</h1>
                              </div>
                              <div className="flex space-x-1.5">
                                 <BsCreditCard className="my-auto " />
                                 <h1 className="text-md">See cards</h1>
                              </div>
                           </div>
                        ))}
                     <div className="border-gray-700 bg-gray-200 p-2 rounded-lg space-y-4 relative">
                        <div className="space-y-3">
                           <h1>IBAN: account.iban</h1>
                           <h1>
                              Balance: <span className="font-bold">$983,5</span>
                           </h1>
                           <h1 className="text-sm">
                              Branch: no.99 Union Street, Baltimore
                           </h1>
                        </div>
                        <div className="flex justify-between mx-3">
                           <Link href="/">
                              <a>
                                 <div className="flex space-x-3">
                                    {" "}
                                    <BsCreditCard className="my-auto " />
                                    <h1 className="text-md">See details</h1>
                                 </div>
                              </a>
                           </Link>
                           <div className="flex space-x-1.5">
                              <BsCreditCard className="my-auto " />
                              <h1 className="text-md">Cards</h1>
                           </div>
                        </div>
                        <div className="bg-blue-500 w-6 h-6 absolute top-0 right-0 -mx-6 rounded-full" />
                     </div>{" "}
                  </div>
               </div>{" "}
               <div className="col-span-4">
                  {isPicked ? (
                     <div>
                        {" "}
                        <div className="flex justify-between mx-3">
                           <Link href="/">
                              <a>
                                 <div className="flex space-x-3">
                                    {" "}
                                    <BsCreditCard className="my-auto " />
                                    <h1 className="text-md">See details</h1>
                                 </div>
                              </a>
                           </Link>
                           <div className="flex space-x-1.5">
                              <BsCreditCard className="my-auto " />
                              <h1 className="text-md">Cards</h1>
                           </div>
                        </div>
                        <div className="mt-4">
                           <h1>
                              Balance: <span className="font-bold">$983,5</span>
                           </h1>
                        </div>
                     </div>
                  ) : (
                     <h1>Pick account to see details</h1>
                  )}
               </div>
            </div>{" "}
         </div>
      </Layout>
   );
};

export default Accounts;
