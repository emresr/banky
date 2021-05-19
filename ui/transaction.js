import { useState, useEffect } from "react";
import { FcCollapse, FcExpand } from "react-icons/fc";
import moment from "moment";
import dayjs from "dayjs";
const Transaction = ({ transaction, isSended }) => {
   const [isDetailsOpen, setIsDetailsOpen] = useState(false);

   return (
      <div className="border-2 border-black flex py-2 ">
         <button
            onClick={() => {
               setIsDetailsOpen(!isDetailsOpen);
            }}
            className="focus:outline-none my-auto"
         >
            {isDetailsOpen ? <FcCollapse /> : <FcExpand />}
         </button>
         {transaction && !isDetailsOpen ? (
            <div className="w-full flex justify-between font-extrabold mx-10">
               <h1
                  className={`${isSended ? "text-green-500" : "text-red-500"}`}
               >
                  {transaction.amount}
               </h1>
               <h1>10 May 2023</h1>
            </div>
         ) : (
            <div className="w-full flex justify-between font-extrabold mx-10">
               <h1
                  className={`${isSended ? "text-green-500" : "text-red-500"}`}
               >
                  {transaction.amount}
               </h1>
               <h1>10 May 2023</h1>
            </div>
         )}
      </div>
   );
};

export default Transaction;
