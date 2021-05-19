import Link from "next/link";
import { BsCreditCard } from "react-icons/bs";
import { BiTransfer } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { AiOutlineBank } from "react-icons/ai";
const Sidebar = () => {
   return (
      <div className="mx-6 mt-5 fixed">
         <div className="flex space-x-4 mx-5">
            {" "}
            <img
               className="rounded-full "
               src="https://picsum.photos/48/48/?random"
            />
            <h1 className="text-2xl font-bold my-auto">Emre S.</h1>
         </div>
         <div className="mt-6 mx-3">
            <h1 className="text-gray-600 text-md text-md ">Balance</h1>
            <h1 className="font-bold text-xl">$ 512,25 </h1>
         </div>
         <ul className="space-y-3 mt-4">
            <li className=" flex justify-center ">
               <div className="p-2 bg-blue-500 hover:bg-blue-400 w-full rounded-lg transition  flex justify-center cursor-pointer">
                  {" "}
                  <div className="flex space-x-2">
                     <AiOutlineBank className="my-auto" size={24} />
                     <Link href="/">
                        <h1 className="font-bold">General Look</h1>
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
                        <h1 className="font-bold">Accounts</h1>
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
                        <h1 className="font-bold">Cards</h1>
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
                        <h1 className="font-bold">Transfers</h1>
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
                        <h1 className="font-bold">Settings</h1>
                     </Link>
                  </div>
               </div>
            </li>
         </ul>
         <div className=" p-2">
            <h1 className="text-bold text-sm text-gray-600">
               2021 Banky - All rights reserved
            </h1>
         </div>
      </div>
   );
};

export default Sidebar;
