import Link from "next/link";

const Sidebar = () => {
   return (
      <div className="mx-6 mt-5">
         <ul className="space-y-2">
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
               <button className="p-2 bg-blue-500 hover:bg-blue-400 w-full rounded-lg transition ">
                  {" "}
                  <Link href="/cards">
                     <h1 className="font-bold">Cards</h1>
                  </Link>
               </button>
            </li>
            <li className=" flex justify-center ">
               <button className="p-2 bg-blue-500 hover:bg-blue-400 w-full rounded-lg transition ">
                  {" "}
                  <h1 className="font-bold">General Look</h1>
               </button>
            </li>
         </ul>
      </div>
   );
};

export default Sidebar;
