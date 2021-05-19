import Layout from "../components/layout/layout";
import { useState, useEffect } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import Head from "next/head";

const Settings = () => {
   const [isNotifications, setIsNotifications] = useState(false);
   const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

   return (
      <div>
         <Head>
            <title>Settings | Banky</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Layout>
            <div className="w-1/2 p-3 ">
               <h1 className="text-xl font-bold">Settings</h1>
               {isNotifications ? (
                  <div className="bg-gray-300 flex justify-between p-3">
                     <h1>Notifications</h1>{" "}
                     <button
                        class={`transition ease-in-out duration-300 w-12  rounded-full focus:outline-none
          ${isNotificationsEnabled ? "bg-green-500" : "bg-gray-200"}
          `}
                        onClick={() => {
                           setIsNotificationsEnabled(!isNotificationsEnabled);
                        }}
                     >
                        <div
                           class={`transition ease-in-out duration-300 rounded-full h-6 w-6 bg-white shadow    
            ${isNotificationsEnabled && "transform translate-x-6"}
            `}
                        ></div>
                     </button>{" "}
                  </div>
               ) : (
                  <div className="bg-gray-300 flex justify-between p-3">
                     <h1>Notifications</h1>{" "}
                     <button
                        class={`transition ease-in-out duration-300 w-12  rounded-full focus:outline-none
          ${isNotificationsEnabled ? "bg-green-500" : "bg-gray-200"}
          `}
                        onClick={() => {
                           setIsNotificationsEnabled(!isNotificationsEnabled);
                        }}
                     >
                        <div
                           class={`transition ease-in-out duration-300 rounded-full h-6 w-6 bg-white shadow    
            ${isNotificationsEnabled && "transform translate-x-6"}
            `}
                        ></div>
                     </button>{" "}
                  </div>
               )}
            </div>
         </Layout>
      </div>
   );
};
export default Settings;
