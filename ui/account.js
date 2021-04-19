import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./../redux/actions/user";
import { getAccount } from "./../redux/actions/account";
import { useState, useEffect } from "react";
import Link from "next/link";
import { BsCreditCard } from "react-icons/bs";

const Account = ({ id }) => {
   const dispatch = useDispatch();
   const account = useSelector((state) => state.accounts);
   console.log("account", account);

   useEffect(() => {
      dispatch(getAccount(id));
   }, []);

   return (
      <div>
         {" "}
         <div className="flex justify-between mx-3">
            <Link href="/">
               <a>
                  <div className="flex space-x-3">
                     {" "}
                     <BsCreditCard className="my-auto " />
                     <h1 className="text-md">See details</h1>
                  </div>
               </a>
            </Link>
            <div className="flex space-x-1.5">
               <BsCreditCard className="my-auto " />
               <h1 className="text-md">Cards</h1>
            </div>
         </div>
         <div className="mt-4">
            <h1>
               Balance: <span className="font-bold">$983,5</span>
            </h1>
         </div>
      </div>
   );
};

export default Account;
