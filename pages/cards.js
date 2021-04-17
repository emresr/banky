import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import CreditCard from "../ui/card";
const Cards = () => {
   return (
      <Layout>
         <div className="mt-4 ml-3 ">
            <h1 className="text-3xl">Cards</h1>
            <div>
               <CreditCard />
               <h1>Preferences</h1>
            </div>
         </div>
      </Layout>
   );
};

export default Cards;
