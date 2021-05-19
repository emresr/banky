import Notifications from "./notifications";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
   const dispatch = useDispatch();

   const token = useSelector((state) => state.user.token);
   const user = useSelector((state) => state.user.user);

   useEffect(() => {
      if (token) {
         localStorage.setItem("token", token);
      }
   }, [token]);

   return (
      <div className="bg-blue-600 flex justify-around py-2 ">
         <div className="my-auto">
            <h1>Left</h1>
         </div>
         <h1 className="text-white font-bold text-5xl">Banky</h1>
         <div className="my-auto flex space-x-3">
            <h1 className="my-auto">Login</h1>
            <div className="border-2 p-1">
               <h1>Euro: $1,22</h1>
               <h1>Gold: $1.767</h1>
            </div>
            <Notifications />{" "}
         </div>
      </div>
   );
};

export default Header;
