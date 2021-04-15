import { useState, useEffect } from "react";
import { FcCollapse, FcExpand } from "react-icons/fc";

const Transaction = ({ amount, to }) => {
   const [isDetailsOpen, setIsDetailsOpen] = useState(false);

   return (
      <div className="border-2 border-black ">
         <button
            onClick={() => {
               setIsDetailsOpen(!isDetailsOpen);
            }}
            className="focus:outline-none my-auto"
         >
            {isDetailsOpen ? <FcCollapse /> : <FcExpand />}
         </button>
         {!isDetailsOpen ? (
            <div className="flex justify-around">
               <h1>{amount}</h1>
               <h1>21.02.2020</h1>
               <h1>Electic</h1>
            </div>
         ) : (
            <div className="flex justify-around">
               <h1>{amount}</h1>
               <h1>21.02.2020</h1>
               <h1>Electic</h1>
            </div>
         )}
      </div>
   );
};

export default Transaction;
