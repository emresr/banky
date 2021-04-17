import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { getCard } from "./../../redux/actions/card";
import { BsCreditCard } from "react-icons/bs";
import Link from "next/link";
import Permissions from "../../ui/permissions";

const Account = () => {
   const dispatch = useDispatch();
   const card = useSelector((state) => state.card);
   console.log("lmao", card.card);

   useEffect(() => {
      dispatch(getCard(1));
   }, []);

   return (
      <Layout>
         <div className="mt-4 ml-3 ">
            {card.card && <h1 className="text-3xl">Mastercard</h1>}
            <div>
               {" "}
               <h1 className="text-lg font-bold ">Permissions</h1>
               <h1>ATM Cash </h1>
               <div className=" space-y-5">
                  <Permissions name="ATM" />
                  <Permissions name="Shopping" />
                  <Permissions name="E-commerce" />
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default Account;
