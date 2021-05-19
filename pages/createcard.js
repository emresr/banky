import Head from "next/head";
import Layout from "../components/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { CREATECARD } from "../gql/card/mutation";

const CreateCard = () => {
   const dispatch = useDispatch();
   const user = useSelector((state) => state.user);
   const [account, setAccount] = useState();
   console.log("user", user);
   return (
      <div>
         <Head>
            <title>Banky</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Layout className="">
            <div className="mt-5">
               <h1 className="text-4xl">Create Card</h1>
               {user &&
                  user.user &&
                  user.user.accounts &&
                  user.user.accounts.map((account) => (
                     <button
                        onClick={() => {
                           setAccount(account.id);
                        }}
                     >
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
                                       <h1 className="text-md">See details</h1>
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
                     </button>
                  ))}
            </div>
         </Layout>
      </div>
   );
};

export default CreateCard;
