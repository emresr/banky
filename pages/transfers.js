import { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import getClient from "../apollo/apollo";
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

   const [isIban, setIsIban] = useState(false);
   const [isPhone, setIsPhone] = useState(false);
   const [isEmail, setIsEmail] = useState(false);

   const [senderAccountId, setSenderAccountId] = useState(0);
   //Iban
   const [receiverId, setReceiverId] = useState("");
   const [amount, setAmount] = useState(0);
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
               senderId: 1,
               receiverId: receiverId,
               amount: parseFloat(amount),
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
                    senderId: 1,
                    email: email,
                    amount: parseFloat(phoneEmailAmount),
                 },
              })
            : phonenumber !== 0 &&
              (await getClient().mutate({
                 mutation: IBANPHONETRANSACTION,
                 variables: {
                    senderId: 1,
                    phonenumber: phonenumber,
                    amount: parseFloat(phoneEmailAmount),
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
      <Layout>
         <div className="grid grid-cols-12">
            <div className="col-span-8">
               <h1 className="text-2xl">Transfers</h1>
               <div>
                  <div className="bg-gray-300">
                     <button
                        onClick={() => {
                           setIsIban(true);
                           setIsEmail(false);
                           setIsPhone(false);
                        }}
                     >
                        Send to IBAN
                     </button>
                  </div>
                  <div className="bg-gray-300">
                     <button
                        onClick={() => {
                           setIsIban(false);
                           setIsEmail(false);
                           setIsPhone(true);
                        }}
                     >
                        Send to Phone Number
                     </button>
                  </div>
                  <div className="bg-gray-300">
                     <button
                        onClick={() => {
                           setIsIban(false);
                           setIsEmail(true);
                           setIsPhone(false);
                        }}
                     >
                        Send to Email
                     </button>
                  </div>
               </div>{" "}
               <div className="mt-4 bg-gray-400">
                  {isIban && (
                     <div className="p-2 space-y-2">
                        <form onSubmit={onSubmitIban}>
                           <h1 className="text-2xl font-bold">Send to IBAN</h1>
                           <input
                              className="w-1/2 rounded-lg h-10 focus:outline-none text-4xl px-2"
                              placeholder="IBAN"
                              value={receiverId}
                              onChange={(e) => setReceiverId(e.target.value)}
                           />
                           <div>
                              <input
                                 className="w-1/2 rounded-lg h-10 focus:outline-none text-4xl px-2"
                                 placeholder="Amount"
                                 value={amount}
                                 onChange={(e) => setAmount(e.target.value)}
                                 type="number"
                              />
                           </div>
                           <button
                              className="bg-purple-800 p-2 text-white rounded-xl text-lg"
                              type="submit"
                           >
                              Send
                           </button>
                        </form>
                     </div>
                  )}
                  {isPhone && (
                     <div className="p-2 space-y-2">
                        <form onSubmit={onSubmitPhoneEmail}>
                           <h1 className="text-2xl font-bold">
                              Send to Phone Number
                           </h1>
                           <input
                              className="w-1/2 rounded-lg h-10 focus:outline-none text-4xl px-2"
                              placeholder="IBAN"
                              value={phonenumber}
                              onChange={(e) => setPhonenumber(e.target.value)}
                              type="number"
                           />
                           <div>
                              <input
                                 className="w-1/2 rounded-lg h-10 focus:outline-none text-4xl px-2"
                                 placeholder="Amount"
                                 value={phoneEmailAmount}
                                 onChange={(e) => setAmount(e.target.value)}
                                 type="number"
                              />
                           </div>
                           <button
                              className="bg-purple-800 p-2 text-white rounded-xl text-lg"
                              type="submit"
                           >
                              Send
                           </button>
                        </form>
                     </div>
                  )}
                  {isEmail && (
                     <div className="p-2 space-y-2">
                        <form onSubmit={onSubmitPhoneEmail}>
                           <h1 className="text-2xl font-bold">Send to IBAN</h1>
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
                           <button
                              className="bg-purple-800 p-2 text-white rounded-xl text-lg"
                              type="submit"
                           >
                              Send
                           </button>
                        </form>
                     </div>
                  )}
               </div>
            </div>

            <div className="col-span-4">
               {accounts &&
                  accounts.user.accounts &&
                  accounts.user.accounts.map((account) => (
                     <label
                        onClick={() => {
                           setSenderAccountId(account.id);
                        }}
                     >
                        {" "}
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
                                 <a>
                                    <div className="flex space-x-3">
                                       {" "}
                                       <h1 className="text-md">See details</h1>
                                    </div>
                                 </a>
                              </Link>
                           </div>
                           <div className="bg-blue-500 w-6 h-6 absolute top-0 right-0 -mx-6 rounded-full" />
                        </div>
                     </label>
                  ))}
            </div>
         </div>
      </Layout>
   );
};
export default Transfers;
