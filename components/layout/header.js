import Notifications from "./notifications";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Link from "next/link";
const Header = () => {
   const dispatch = useDispatch();
   const user = useSelector((state) => state.user.user);

   const [isOpen, setIsOpen] = useState(false);
   return (
      <div>
         <div className="hidden md:block">
            <div className="bg-blue-600 flex justify-around py-2 text-center">
               <div className="my-auto ">
                  <Link href="https://github.com/emresr/banky">
                     <a className="font-bold text-gray-100 ">Source Code</a>
                  </Link>
               </div>
               <h1 className="text-white font-bold text-5xl">Banky</h1>
               <div className="text-gray-100">
                  <h1>Euro: $1,22</h1>
                  <h1>Gold: $1.767</h1>
               </div>
            </div>
         </div>
         <div className="md:hidden bg-blue-600 px-4 py-2">
            <div className="flex justify-between">
               <h1 className="text-white font-bold text-5xl">Banky</h1>
               <label
                  onClick={() => {
                     setIsOpen(!isOpen);
                  }}
                  className="my-auto"
               >
                  <div className="">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fillRule="white"
                     >
                        <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                     </svg>
                  </div>
               </label>
            </div>
            {isOpen && (
               <div className="flex justify-around mt-2 ">
                  <div className="my-auto ">
                     <Link href="https://github.com/emresr/banky">
                        <a className="font-bold text-gray-100 ">Source Code</a>
                     </Link>
                  </div>
                  <div className="text-gray-100">
                     <h1>Euro: $1,22</h1>
                     <h1>Gold: $1.767</h1>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default Header;
