import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import CreditCard from "../ui/card";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./../redux/actions/user";
import Link from "next/link";
const Cards = () => {
   const dispatch = useDispatch();
   const user = useSelector((state) => state.user);
   console.log("lmao", user);

   useEffect(() => {
      dispatch(getUser(1));
   }, []);

   return (
      <Layout>
         <div className="mt-4 ml-3">
            <div className=" w-1/2">
               <h1 className="text-3xl">Cards</h1>
               <div className="space-y-4 ">
                  {user.user &&
                     user.user.accounts.map((account) =>
                        account.cards.map((card) => (
                           <Link href={`/card/${card.id}`}>
                              <a>
                                 <CreditCard />
                              </a>
                           </Link>
                        ))
                     )}
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default Cards;
