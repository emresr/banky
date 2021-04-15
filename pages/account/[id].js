import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/user";
import { BsCreditCard } from "react-icons/bs";
import Link from "next/link";
import Transaction from "../../ui/transaction";
const Account = () => {
   const dispatch = useDispatch();
   const user = useSelector((state) => state.user);
   console.log("lmao", user.user);

   useEffect(() => {
      dispatch(getUser(2));
   }, []);

   const [isSended, setIsSended] = useState(true);
   return (
      <Layout>
         <div className="mt-4 mx-3 ">
            <div className="grid grid-cols-12">
               <div className="col-span-8">
                  <h1 className="text-3xl">Account</h1>
                  <div className="space-y-3  mt-5 mx-3">
                     <div className="border-gray-700 bg-gray-200 p-2 rounded-lg space-y-4">
                        <div>
                           <h1>IBAN: account.iban</h1>
                        </div>{" "}
                        <Link href={`/account/`}>
                           <a>
                              <div className="flex space-x-1.5">
                                 <BsCreditCard className="my-auto " />{" "}
                                 <h1 className="text-md">See cards</h1>{" "}
                              </div>{" "}
                           </a>
                        </Link>
                     </div>
                     <div>
                        <h1 className="font-bold text-lg">Transactions</h1>
                        <div className="flex justify-between">
                           <div className="rounded-lg flex ">
                              <button
                                 onClick={() => setIsSended(true)}
                                 className={` py-1 px-2  rounded-l-md border-black flex justify-center focus:outline-none ${
                                    isSended ? "bg-blue-500" : "bg-gray-300"
                                 }`}
                              >
                                 <h1 className="text-black text-lg">Sended</h1>
                              </button>
                              <button
                                 onClick={() => setIsSended(false)}
                                 className={`p-1 bg-gray-300 rounded-r-md border-black flex justify-center focus:outline-none ${
                                    !isSended ? "bg-blue-500" : "bg-gray-300"
                                 }`}
                              >
                                 <h1 className="text-black text-lg">
                                    Received
                                 </h1>
                              </button>
                           </div>
                           <div className="flex space-x-2">
                              <h1 className="my-auto border-2">10.12.1991</h1>{" "}
                              <h1 className="my-auto">10.12.2031</h1>
                              <button className="bg-green-400 rounded-lg px-1">
                                 Filter
                              </button>
                           </div>
                        </div>
                        <div>
                           <Transaction amount="600" />{" "}
                           <Transaction amount="99" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-span-4">Cards</div>
            </div>
         </div>
      </Layout>
   );
};

export default Account;
