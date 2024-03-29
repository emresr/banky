import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { getAccount } from "../../redux/actions/account";
import { BsCreditCard } from "react-icons/bs";
import Link from "next/link";
import Transaction from "../../ui/transaction";
import { useRouter } from "next/router";
import CreditCard from "../../ui/card";

const Account = () => {
   const router = useRouter();
   const { id } = router.query;
   console.log("id", id);
   const dispatch = useDispatch();
   const account = useSelector((state) => state.accounts);

   useEffect(() => {
      dispatch(getAccount(1));
   }, []);

   const [isSended, setIsSended] = useState(true);

   return (
      <Layout>
         <div className="mt-4 mx-3 ">
            <div className="grid grid-cols-12">
               <div className="col-span-8 px-3">
                  <div className="flex justify-between ">
                     <h1 className="text-3xl">Account</h1>
                     <button className="bg-green-500 p-2 transition duration-300 hover:bg-green-400 rounded-lg">
                        {" "}
                        Create Card
                     </button>
                  </div>
                  <div className="space-y-3  mt-5 ">
                     <div className="border-gray-700 bg-gray-200 p-2 rounded-lg space-y-4">
                        <div>
                           <h1 className="font-3xl">
                              IBAN: {account.account.iban}
                           </h1>
                        </div>{" "}
                     </div>
                     <div>
                        <div className="flex justify-between mt-5">
                           <h1 className="font-bold text-lg">Transactions</h1>
                           <div className="">
                              <div className="rounded-lg flex ">
                                 <button
                                    onClick={() => setIsSended(false)}
                                    className={` py-1 px-2  rounded-l-md border-black flex justify-center focus:outline-none ${
                                       !isSended ? "bg-blue-500" : "bg-gray-300"
                                    }`}
                                 >
                                    <h1 className="text-black text-lg">
                                       Received
                                    </h1>
                                 </button>
                                 <button
                                    onClick={() => setIsSended(true)}
                                    className={`p-1 bg-gray-300 rounded-r-md border-black flex justify-center focus:outline-none ${
                                       isSended ? "bg-blue-500" : "bg-gray-300"
                                    }`}
                                 >
                                    <h1 className="text-black text-lg">
                                       Sended
                                    </h1>
                                 </button>
                              </div>
                           </div>
                        </div>{" "}
                        <div>
                           {" "}
                           <div className="space-y-2 mt-5">
                              {isSended
                                 ? account.account.sended &&
                                   account.account.sended.map((sended) => (
                                      <Transaction
                                         transaction={sended}
                                         isSended="true"
                                      />
                                   ))
                                 : account.account.received &&
                                   account.account.received.map((received) => (
                                      <Transaction
                                         transaction={received}
                                         isSended="false"
                                      />
                                   ))}{" "}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-span-4 p-2 divide-y space-y-">
                  <h1 className="flex justify-center text-2xl ">Cards</h1>
                  <div className="space-y-3">
                     {account.account.cards &&
                        account.account.cards.map((card) => (
                           <div>
                              <Link href={`/card/${card.id}`}>
                                 <a>
                                    <CreditCard />
                                 </a>
                              </Link>
                           </div>
                        ))}
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default Account;
