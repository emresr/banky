import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./../redux/actions/user";
import { BsCreditCard } from "react-icons/bs";
import Link from "next/link";
const Account = () => {
   const dispatch = useDispatch();
   const user = useSelector((state) => state.user);
   console.log("lmao", user.user);

   useEffect(() => {
      dispatch(getUser(2));
   }, []);

   return (
      <Layout>
         <div className="mt-4 ml-3 ">
            <h1 className="text-3xl">Accounts</h1>
            <div className="space-y-3 w-1/2 mt-5 mx-3">
               {user.user.accounts &&
                  user.user.accounts.map((account) => (
                     <div
                        key={account.id}
                        className="border-gray-700 bg-gray-200 p-2 rounded-lg space-y-4"
                     >
                        <div>
                           <h1>IBAN: {account.iban}</h1>
                        </div>{" "}
                        <Link href={`/account/${account.id}`}>
                           <div className="flex space-x-1.5">
                              <BsCreditCard className="my-auto " />{" "}
                              <h1 className="text-md">See cards</h1>{" "}
                           </div>{" "}
                        </Link>
                     </div>
                  ))}
            </div>
         </div>
      </Layout>
   );
};

export default Account;
