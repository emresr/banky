import { useState, useEffect } from "react";

const Permissions = ({ name }) => {
   const [isYurticiEnabled, setIsYurticiEnabled] = useState(false);

   return (
      <div className=" w-1/3 space-y-2">
         <h1>{name}</h1>
         <div className="flex space-x-2 justify-between">
            <h1>Yurtici</h1>
            <button
               className={`transition ease-in-out duration-300 w-14 h-7 px-1 rounded-full focus:outline-none
          ${isYurticiEnabled ? "bg-green-500" : "bg-gray-200"}
          `}
               onClick={() => {
                  setIsYurticiEnabled(!isYurticiEnabled);
               }}
            >
               <div
                  className={`transition ease-in-out duration-300 rounded-full h-6 w-6 bg-white shadow    
            ${isYurticiEnabled && "transform translate-x-6"}
            `}
               ></div>
            </button>
         </div>
         <div className="flex space-x-2 justify-between">
            <h1>Yurtdisi</h1>
            <button
               className={`transition ease-in-out duration-300 w-14 h-7 px-1 rounded-full focus:outline-none
          ${isYurticiEnabled ? "bg-green-500" : "bg-gray-200"}
          `}
               onClick={() => {
                  setIsYurticiEnabled(!isYurticiEnabled);
               }}
            >
               <div
                  className={`transition ease-in-out duration-300 rounded-full h-6 w-6 bg-white shadow    
            ${isYurticiEnabled && "transform translate-x-6"}
            `}
               ></div>
            </button>
         </div>
      </div>
   );
};

export default Permissions;
