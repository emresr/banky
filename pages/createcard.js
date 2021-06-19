import Head from "next/head";
import Layout from "../components/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/actions/user";
import { useEffect, useState } from "react";
import { CREATECARD } from "../gql/card/mutation";
import Link from "next/link";
import { IoWalletOutline } from "react-icons/io5";
import { BsCreditCard } from "react-icons/bs";
import { useMutation } from "@apollo/client";
import styles from "../styles/Create.module.css";
import { useRouter } from "next/router";

const CreateCard = () => {
   const router = useRouter();
   const dispatch = useDispatch();
   const user = useSelector((state) => state.user);
   const [accountId, setAccountId] = useState();

   console.log("user", user);
   useEffect(() => {
      dispatch(getUser(2));""
   }, []);
   const [createCard] = useMutation(CREATECARD, {
      variables: {
         accountId: accountId,
      },
   });
   useEffect(() => {
      console.log(createCard);
      router.push(`/card/${createCard.id}`);
   }, [createCard]);

   return (
      <div>
         <Head>
            <title>Banky</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Layout className="">
            <div className="mt-5 space-y-3 w-2/3">
               <h1 className="text-4xl">Create Card</h1>
               <div className="grid grid-cols-2  gap-5 mt-10">
                  {user &&
                     user.user &&
                     user.user.accounts &&
                     user.user.accounts.map((account) => (
                        <button
                           onClick={() => {
                              setAccountId(parseInt(account.id));
                           }}
                           className={styles.button}
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
                                          <h1 className="text-md">
                                             See details
                                          </h1>
                                       </div>
                                    </a>
                                 </Link>
                                 <div className="flex space-x-1.5">
                                    <BsCreditCard className="my-auto " />{" "}
                                    <button>
                                       <h1 className="text-md">Cards(3)</h1>{" "}
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </button>
                     ))}
               </div>
               <div className="flex justify-center">
                  <button
                     onClick={createCard}
                     className="w-1/2 rounded-lg bg-green-600 mx-auto uppercase font-bold text-lg text-gray-100 hover:bg-green-300"
                  >
                     Create
                  </button>
               </div>
            </div>
         </Layout>
      </div>
   );
};

export default CreateCard;
