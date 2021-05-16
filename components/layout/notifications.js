import { useState } from "react";
import { BsBell } from "react-icons/bs";

const Notifications = () => {
   const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
   const [isSeen, setIsSeen] = useState(false);
   return (
      <div className="my-auto">
         <button
            className="focus:outline-none"
            onClick={() => {
               setIsNotificationsOpen(!isNotificationsOpen);
               setIsSeen(true);
            }}
         >
            <div className="relative ">
               <BsBell size={25} />
               {!isSeen && (
                  <div className="bg-red-500 w-2.5 h-2.5 absolute top-0 right-0  rounded-full">
                     {/*             <span className="text-xs text-white ml-0.5 my-auto">1</span>{" "}
                      */}
                  </div>
               )}
            </div>
         </button>
         {isNotificationsOpen && (
            <div className="absolute right-0 mr-10">
               <div className="bg-yellow-600 p-1 divide-y">
                  <h1 className="mx-auto font-bold text-lg">Notifications</h1>
                  <h1 className="text-sm">There's no such a notification.</h1>
               </div>
            </div>
         )}
      </div>
   );
};

export default Notifications;
