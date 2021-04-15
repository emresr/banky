import { useState } from "react";
import Layout from "../components/layout/layout";

const Transfers = () => {
   const [isIban, setIsIban] = useState(false);
   const [isPhone, setIsPhone] = useState(false);

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
               </div>{" "}
               <div className="mt-4 bg-gray-400">
                  {isIban && (
                     <div className="p-2 space-y-2">
                        <h1 className="text-2xl font-bold">Send to IBAN</h1>
                        <input
                           className="w-1/2 rounded-lg h-10 focus:outline-none text-4xl px-2"
                           placeholder="IBAN"
                        />
                        <div>
                           <input
                              className="w-1/2 rounded-lg h-10 focus:outline-none text-4xl px-2"
                              placeholder="Amount"
                           />
                        </div>
                        <button className="bg-purple-800 p-2 text-white rounded-xl text-lg">
                           Send
                        </button>
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
