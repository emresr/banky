import { useState, useEffect } from "react";

const Permissions = ({ name, domestic, abroad }) => {
   console.log("domestic", domestic);
   const [isDomesticEnabled, setIsDomesticEnabled] = useState(domestic);
   const [isAbroadEnabled, setIsAbroadEnabled] = useState(abroad);

   return (
      <div className=" w-1/3 space-y-2">
         <h1 className="font-bold text-lg mb-2">{name}</h1>
         <div className="flex space-x-2 justify-between">
            <h1>Domestic</h1>
            <button
               className={`transition ease-in-out duration-300 w-14 h-7 px-1 rounded-full focus:outline-none
          ${isDomesticEnabled === true ? "bg-green-500" : "bg-gray-200"}
          `}
               onClick={() => {
                  setIsDomesticEnabled(!isDomesticEnabled);
               }}
            >
               <div
                  className={`transition ease-in-out duration-300 rounded-full h-6 w-6 bg-white shadow    
            ${isDomesticEnabled && "transform translate-x-6"}
            `}
               ></div>
            </button>
         </div>
         <div className="flex space-x-2 justify-between">
            <h1>Abroad</h1>
            <button
               className={`transition ease-in-out duration-300 w-14 h-7 px-1 rounded-full focus:outline-none
          ${isAbroadEnabled ? "bg-green-500" : "bg-gray-200"}
          `}
               onClick={() => {
                  setIsAbroadEnabled(!isAbroadEnabled);
               }}
            >
               <div
                  className={`transition ease-in-out duration-300 rounded-full h-6 w-6 bg-white shadow    
            ${isAbroadEnabled && "transform translate-x-6"}
            `}
               ></div>
            </button>
         </div>
      </div>
   );
};

export default Permissions;
