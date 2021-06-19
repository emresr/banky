import { useState, useEffect } from "react";
import { FcCollapse, FcExpand } from "react-icons/fc";
import moment from "moment";
import dayjs from "dayjs";
const Transaction = ({ transaction, isSended }) => {
   const [isDetailsOpen, setIsDetailsOpen] = useState(false);

   return (
      <div className="border-2 border-black  py-2 transation duration-1000">
         {transaction && !isDetailsOpen ? (
            <div>
               <label
                  onClick={() => {
                     setIsDetailsOpen(!isDetailsOpen);
                  }}
                  className="w-full flex justify-between font-extrabold "
               >
                  <div className="flex mx-3 space-x-4">
                     <button
                        onClick={() => {
                           setIsDetailsOpen(!isDetailsOpen);
                        }}
                        className="focus:outline-none my-auto"
                     >
                        {isDetailsOpen ? <FcCollapse /> : <FcExpand />}
                     </button>
                     <h1
                        className={`${
                           isSended === "false"
                              ? "text-green-500"
                              : "text-red-500"
                        }`}
                     >
                        $ {transaction.amount}
                     </h1>
                  </div>
                  <h1>note</h1>
                  <h1 className="mr-5">10 May 2023</h1>
               </label>{" "}
            </div>
         ) : (
            <label
               onClick={() => {
                  setIsDetailsOpen(!isDetailsOpen);
               }}
            >
               <div className=" ">
                  <div className="w-full flex justify-between font-extrabold">
                     <div className="flex mx-3 space-x-4">
                        <button
                           onClick={() => {
                              setIsDetailsOpen(!isDetailsOpen);
                           }}
                           className="focus:outline-none my-auto"
                        >
                           {isDetailsOpen ? <FcCollapse /> : <FcExpand />}
                        </button>
                        <h1
                           className={`${
                              isSended === "false"
                                 ? "text-green-500"
                                 : "text-red-500"
                           }`}
                        >
                           $ {transaction.amount}
                        </h1>
                     </div>
                     <h1>note</h1>
                     <h1 className="mr-5">10 May 2023</h1>
                  </div>
                  <div>
                     <h1>new</h1>
                  </div>
               </div>
            </label>
         )}
      </div>
   );
};

export default Transaction;
