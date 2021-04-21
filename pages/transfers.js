import { useState } from "react";
import Layout from "../components/layout/layout";
import getClient from "../apollo/apollo";
import { CREATETRANSACTION } from "../gql/transaction/mutation";
import { useRouter } from "next/router";

const Transfers = () => {
   const router = useRouter();
   const [isIban, setIsIban] = useState(false);
   const [isPhone, setIsPhone] = useState(false);

   const [receiverId, setReceiverId] = useState("");
   const [amount, setAmount] = useState(0);
   console.log(amount);
   // Send
   const onSubmit = async (e) => {
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
                        }}
                     >
                        Send to IBAN
                     </button>
                  </div>
                  <div className="bg-gray-300">
                     <button>Send to Phone Number</button>
                  </div>
                  <div className="bg-gray-300">
                     <button>Send to Username</button>
                  </div>
               </div>{" "}
               <div className="mt-4 bg-gray-400">
                  {isIban && (
                     <div className="p-2 space-y-2">
                        <form onSubmit={onSubmit}>
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
               </div>
            </div>

            <div className="col-span-4">Pick card</div>
         </div>
      </Layout>
   );
};
export default Transfers;
