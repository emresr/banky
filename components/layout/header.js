import Notifications from "./notifications";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Header.module.css";
import Link from "next/link";
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
      <div className={styles.container}>
         <div className="my-auto">
            <Link href="https://github.com/emresr/banky">
               <a className="font-bold text-gray-100 ">Source Code</a>
            </Link>
         </div>
         <h1 className="text-white font-bold text-5xl">Banky</h1>
         <div className="">
            <div className="text-gray-100">
               <h1>Euro: $1,22</h1>
               <h1>Gold: $1.767</h1>
            </div>
         </div>
      </div>
   );
};

export default Header;
