import Link from "next/link";
import { BsCreditCard } from "react-icons/bs";
import { BiTransfer } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { AiOutlineBank } from "react-icons/ai";

const Sidebar = () => {
   return (
      <div className="mx-2  md:mx-6 mt-5  md:fixed">
         <div className="flex md:block space-x-5 ">
            <div className="flex space-x-4 md:mx-5">
               {" "}
               <img
                  className="rounded-full "
                  src="https://picsum.photos/48/48/?random"
               />
               <h1 className="text-2xl font-bold my-auto">Emre S.</h1>
            </div>
            <div className="md:mt-6 mx-3 my-auto">
               <h1 className="text-gray-600 text-md text-md ">Balance</h1>
               <h1 className="font-bold text-xl">$ 512,25 </h1>
            </div>{" "}
         </div>
         <ul className="md:space-y-3 mt-4 md:block flex overflow-x-auto space-x-2 ">
            <li className=" flex justify-center ">
               <div className="p-2 bg-blue-500 hover:bg-blue-400 w-full rounded-lg transition  flex justify-center cursor-pointer">
                  {" "}
                  <div className="flex space-x-2">
                     <AiOutlineBank className="my-auto" size={24} />
                     <Link href="/">
                        <h1 className="font-bold my-auto">General Look</h1>
                     </Link>
                  </div>
               </div>
            </li>
            <li className=" flex justify-center ">
               <div className="p-2 bg-blue-500 hover:bg-blue-400 w-full rounded-lg transition  flex justify-center cursor-pointer">
                  {" "}
                  <div className="flex space-x-2 ">
                     <IoWalletOutline className="my-auto" size={24} />
                     <Link href="/accounts">
                        <h1 className="font-bold my-auto">Accounts</h1>
                     </Link>
                  </div>
               </div>
            </li>
            <li className=" flex justify-center ">
               <div className="p-2 bg-blue-500 hover:bg-blue-400 w-full rounded-lg transition  flex justify-center cursor-pointer">
                  {" "}
                  <div className="flex space-x-2">
                     <BsCreditCard className="my-auto " size={24} />
                     <Link href="/cards">
                        <h1 className="font-bold my-auto">Cards</h1>
                     </Link>
                  </div>
               </div>
            </li>

            <li className=" flex justify-center ">
               <div className="p-2 bg-blue-500 hover:bg-blue-400 w-full rounded-lg transition  flex justify-center cursor-pointer">
                  {" "}
                  <div className="flex space-x-2">
                     <BiTransfer className="my-auto" size={24} />
                     <Link href="/transfers">
                        <h1 className="font-bold my-auto">Transfers</h1>
                     </Link>
                  </div>
               </div>
            </li>
            <li className=" flex justify-center ">
               <div className="p-2 bg-blue-500 hover:bg-blue-400 w-full rounded-lg transition  flex justify-center cursor-pointer">
                  {" "}
                  <div className="flex space-x-2">
                     <FiSettings className="my-auto" size={24} />
                     <Link href="/settings">
                        <h1 className="font-bold my-auto">Settings</h1>
                     </Link>
                  </div>
               </div>
            </li>
         </ul>
         <div className="hidden md:block p-2">
            <h1 className="text-bold text-sm text-gray-600">
               2021 Banky - All rights reserved
            </h1>
         </div>
      </div>
   );
};

export default Sidebar;
