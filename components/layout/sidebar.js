const Sidebar = () => {
   return (
      <div className="mx-6 mt-5">
         <ul className="space-y-2">
            <li className=" flex justify-center ">
               <button className="p-2 bg-gray-400 hover:bg-gray-300 w-full rounded-lg transition ">
                  {" "}
                  <h1 className="font-bold">General Look</h1>
               </button>
            </li>
            <li>
               <h1>Accounts</h1>
            </li>
         </ul>
      </div>
   );
};

export default Sidebar;
