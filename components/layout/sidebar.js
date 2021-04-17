import Link from "next/link";
import { BsCreditCard } from "react-icons/bs";
const Sidebar = () => {
   return (
      <div className="mx-6 mt-5">
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
         <ul className="space-y-2 mt-4">
            <li className=" flex justify-center ">
               <button className="p-2 bg-gray-400 hover:bg-gray-300 w-full rounded-lg transition ">
                  {" "}
                  <Link href="/">
                     <h1 className="font-bold">General Look</h1>
                  </Link>
               </button>
            </li>
            <li className=" flex justify-center ">
               <button className="p-2 bg-blue-500 hover:bg-blue-400 w-full rounded-lg transition ">
                  {" "}
                  <Link href="/accounts">
                     <h1 className="font-bold">Accounts</h1>
                  </Link>
               </button>
            </li>
            <li className=" flex justify-center ">
               <button className="p-2 bg-blue-500 hover:bg-blue-400 w-full rounded-lg transition flex justify-center">
                  {" "}
                  <div className="flex space-x-2">
                     <BsCreditCard className="my-auto " />
                     <Link href="/cards">
                        <h1 className="font-bold">Cards</h1>
                     </Link>
                  </div>
               </button>
            </li>

            <li className=" flex justify-center ">
               <button className="p-2 bg-blue-500 hover:bg-blue-400 w-full rounded-lg transition ">
                  {" "}
                  <Link href="/payments">
                     <h1 className="font-bold">Payments</h1>
                  </Link>
               </button>
            </li>
            <li className=" flex justify-center ">
               <button className="p-2 bg-blue-500 hover:bg-blue-400 w-full rounded-lg transition ">
                  {" "}
                  <Link href="/transfers">
                     <h1 className="font-bold">Transfers</h1>
                  </Link>
               </button>
            </li>
            <li className=" flex justify-center ">
               <button className="p-2 bg-blue-500 hover:bg-blue-400 w-full rounded-lg transition ">
                  {" "}
                  <Link href="/settings">
                     <h1 className="font-bold">Settings</h1>
                  </Link>
               </button>
            </li>
         </ul>
         <div className="mt-2 p-2">
            <h1 className="text-bold text-sm text-gray-600">
               2021 Banky - All rights reserved
            </h1>
         </div>
      </div>
   );
};

export default Sidebar;
