import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { getTransaction } from "../../redux/actions/transaction";

import Link from "next/link";

import { useRouter } from "next/router";

import Head from "next/head";

const Transaction = () => {
   const router = useRouter();
   const { id } = router.query;
   console.log("id", id);
   const dispatch = useDispatch();
   const transaction = useSelector((state) => state.transaction);
   console.log(transaction);

   useEffect(() => {
      dispatch(getTransaction(34));
   }, []);

   return (
      <div>
         <Head>
            <title>Transfer | Banky</title>
         </Head>
         <Layout>
            {" "}
            <div className="flex justify-center">
               <div>
                  <h1>Transaction</h1>
                  {transaction.transaction && (
                     <div>
                        <h1>{transaction.transaction.amount}</h1>
                        <h1>Note: {transaction.transaction.note}</h1>
                        <h1>{transaction.transaction.amount}</h1>
                        <h1>{transaction.transaction.amount}</h1>
                        <h1>{transaction.transaction.amount}</h1>
                     </div>
                  )}
               </div>
            </div>
         </Layout>
      </div>
   );
};

export default Transaction;
