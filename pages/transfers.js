import { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import getClient from "../apollo/apollo";
import Head from "next/head";

import {
   CREATETRANSACTION,
   IBANPHONETRANSACTION,
} from "../gql/transaction/mutation";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./../redux/actions/user";
import { getAccounts } from "./../redux/actions/account";
import Link from "next/link";

const Transfers = () => {
   const router = useRouter();
   const dispatch = useDispatch();
   const accounts = useSelector((state) => state.user);
   console.log("lmao", accounts);

   useEffect(() => {
      dispatch(getUser(2));
   }, []);

   const [isIban, setIsIban] = useState(true);
   const [isPhone, setIsPhone] = useState(false);
   const [isEmail, setIsEmail] = useState(false);

   const [senderAccountId, setSenderAccountId] = useState(0);
   console.log(senderAccountId);
   //Iban
   const [receiverId, setReceiverId] = useState("");
   const [amount, setAmount] = useState(0);
   const [note, setNote] = useState("");
   // Email - Phone number
   const [phonenumber, setPhonenumber] = useState("");
   const [phoneEmailAmount, setPhoneEmailAmount] = useState(0);
   const [email, setEmail] = useState("");

   // IBAN
   const onSubmitIban = async (e) => {
      e.preventDefault();

      try {
         const result = await getClient().mutate({
            mutation: CREATETRANSACTION,
            variables: {
               senderId: senderAccountId,
               receiverId: receiverId,
               amount: parseFloat(amount),
               note: note,
            },
         });
         if (result.data) {
            console.log(result.data);
            router.push(`/transaction/${result.data.createTransaction.id}`);
         }
      } catch (error) {
         console.error(error);
      }
   };
   // Email - Phone number
   const onSubmitPhoneEmail = async (e) => {
      e.preventDefault();
      console.log(phonenumber);
      console.log(email);
      console.log(phoneEmailAmount);
      try {
         const result = email
            ? await getClient().mutate({
                 mutation: IBANPHONETRANSACTION,
                 variables: {
                    senderId: senderAccountId,
                    email: email,
                    amount: parseFloat(phoneEmailAmount),
                    note: note,
                 },
              })
            : phonenumber !== 0 &&
              (await getClient().mutate({
                 mutation: IBANPHONETRANSACTION,
                 variables: {
                    senderId: senderAccountId,
                    phonenumber: phonenumber,
                    amount: parseFloat(phoneEmailAmount),
                    note: note,
                 },
              }));
         if (result.data) {
            console.log(result.data);
            router.push(`/transaction/${result.data.createTransaction.id}`);
         }
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <div>
         <Head>
            <title>Transfers | Banky</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Layout>
            <div className="grid grid-cols-12">
               <div className="col-span-8">
                  <h1 className="text-2xl ">Transfers</h1>

                  <div className="mt-4">
                     {!isIban ? (
                        <div className="p-2 border-b-2 rounded bg-blue-700 text-white">
                           <label
                              onClick={() => {
                                 setIsIban(true);
                                 setIsEmail(false);
                                 setIsPhone(false);
                              }}
                           >
                              <h1 className="text-2xl font-bold">
                                 Send to IBAN
                              </h1>
                           </label>
                        </div>
                     ) : (
                        <div className=" rounded">
                           <div className="p-2 rounded bg-blue-700 text-white mt-3">
                              <label
                                 onClick={() => {
                                    setIsIban(false);
                                 }}
                                 className="bg-gray-300"
                              >
                                 <h1 className="text-2xl font-bold">
                                    Send to IBAN
                                 </h1>
                              </label>
                           </div>{" "}
                           <form onSubmit={onSubmitIban}>
                              <div className="space-y-2 bg-gray-100 p-5 rounded">
                                 <input
                                    className="w-1/2 rounded-lg h-10 focus:outline-none text-4xl px-2"
                                    placeholder="IBAN"
                                    value={receiverId}
                                    onChange={(e) =>
                                       setReceiverId(e.target.value)
                                    }
                                 />
                                 <div>
                                    <input
                                       className="w-1/2 rounded-lg h-10 focus:outline-none text-4xl px-2"
                                       placeholder="Amount"
                                       value={amount}
                                       onChange={(e) =>
                                          setAmount(e.target.value)
                                       }
                                       type="number"
                                    />
                                 </div>
                                 <div>
                                    <input
                                       className="w-1/2 rounded-lg h-10 focus:outline-none text-4xl px-2"
                                       placeholder="Note"
                                       value={note}
                                       onChange={(e) => setNote(e.target.value)}
                                    />
                                 </div>
                                 <button
                                    className="bg-purple-800 p-2 text-white rounded-xl text-lg"
                                    type="submit"
                                 >
                                    Send
                                 </button>
                              </div>
                           </form>
                        </div>
                     )}
                     {!isPhone ? (
                        <div className="p-2 border-b-2 rounded bg-blue-700 text-white mt-3">
                           <label
                              onClick={() => {
                                 setIsIban(false);
                                 setIsEmail(false);
                                 setIsPhone(true);
                              }}
                              className="bg-gray-300"
                           >
                              <h1 className="text-2xl font-bold ">
                                 Send to Phone number
                              </h1>
                           </label>
                        </div>
                     ) : (
                        <div className=" rounded">
                           <div className="p-2 rounded bg-blue-700 text-white mt-3">
                              <label
                                 onClick={() => {
                                    setIsPhone(false);
                                 }}
                              >
                                 <h1 className="text-2xl font-bold">
                                    Send to Phone number
                                 </h1>
                              </label>
                           </div>{" "}
                           <form onSubmit={onSubmitPhoneEmail}>
                              <div className="space-y-2 bg-gray-100 p-5 rounded">
                                 <input
                                    className="w-1/2 rounded-lg h-10 focus:outline-none text-4xl px-2"
                                    placeholder="Phone number"
                                    value={phonenumber}
                                    onChange={(e) =>
                                       setPhonenumber(e.target.value)
                                    }
                                    type="number"
                                 />
                                 <div>
                                    <input
                                       className="w-1/2 rounded-lg h-10 focus:outline-none text-4xl px-2"
                                       placeholder="Amount"
                                       value={phoneEmailAmount}
                                       onChange={(e) =>
                                          setAmount(e.target.value)
                                       }
                                       type="number"
                                    />
                                 </div>
                                 <div>
                                    <input
                                       className="w-1/2 rounded-lg h-10 focus:outline-none text-4xl px-2"
                                       placeholder="Note"
                                       value={note}
                                       onChange={(e) => setNote(e.target.value)}
                                    />
                                 </div>
                                 <button
                                    className="bg-purple-800 p-2 text-white rounded-xl text-lg"
                                    type="submit"
                                 >
                                    Send
                                 </button>
                              </div>
                           </form>
                        </div>
                     )}
                     {!isEmail ? (
                        <div className="p-2 border-b-2 rounded bg-blue-700 text-white mt-3">
                           <label
                              onClick={() => {
                                 setIsIban(false);
                                 setIsEmail(true);
                                 setIsPhone(false);
                              }}
                              className="bg-gray-300"
                           >
                              <h1 className="text-2xl font-bold">
                                 Send to Email
                              </h1>
                           </label>
                        </div>
                     ) : (
                        <div className="rounded">
                           <div className="p-2 rounded bg-blue-700 text-white mt-3">
                              <label
                                 onClick={() => {
                                    setIsEmail(false);
                                 }}
                              >
                                 <h1 className="text-2xl font-bold">
                                    Send to Email
                                 </h1>
                              </label>
                           </div>
                           <form onSubmit={onSubmitPhoneEmail}>
                              <div className="space-y-2 bg-gray-100 p-5 rounded">
                                 <input
                                    className="w-1/2 rounded-lg h-10 focus:outline-none text-4xl px-2"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                 />
                                 <div>
                                    <input
                                       className="w-1/2 rounded-lg h-10 focus:outline-none text-4xl px-2"
                                       placeholder="Amount"
                                       value={phoneEmailAmount}
                                       onChange={(e) =>
                                          setPhoneEmailAmount(e.target.value)
                                       }
                                       type="number"
                                    />
                                 </div>
                                 <div>
                                    <input
                                       className="w-1/2 rounded-lg h-10 focus:outline-none text-4xl px-2"
                                       placeholder="Note"
                                       value={note}
                                       onChange={(e) => setNote(e.target.value)}
                                    />
                                 </div>
                                 <button
                                    className="bg-purple-800 p-2 text-white rounded-xl text-lg"
                                    type="submit"
                                 >
                                    Send
                                 </button>
                              </div>
                           </form>
                        </div>
                     )}
                  </div>
               </div>

               <div className="col-span-4 p-2 space-x-2 mx-2">
                  <h1 className="border-b-2 border-black">Pick account </h1>
                  {accounts &&
                     accounts.user.accounts &&
                     accounts.user.accounts.map((account) => (
                        <label
                           onClick={() => {
                              setSenderAccountId(account.id);
                           }}
                           className="focus:border-2 border-blue"
                        >
                           {" "}
                           <div
                              key={account.id}
                              className={`border-gray-700 bg-gray-200 p-2 rounded-lg space-y-4 ${
                                 account.id == senderAccountId && "bg-red-400"
                              }`}
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
                                    <a>
                                       <div className="flex space-x-3">
                                          {" "}
                                          <h1 className="text-md">
                                             See details
                                          </h1>
                                       </div>
                                    </a>
                                 </Link>
                              </div>
                           </div>
                        </label>
                     ))}
               </div>
            </div>
         </Layout>
      </div>
   );
};
export default Transfers;
