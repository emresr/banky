import Header from "./header";
import Sidebar from "./sidebar";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { checkToken } from "../../redux/actions/user";

import Login from "../login";
function Layout({ children }) {
   const dispatch = useDispatch();
   const user = useSelector((state) => state.user.user);

   console.log("layout user", user);

   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
      setTimeout(() => {
         setIsLoading(false);
      }, 4000);
   }, []);

   return (
      <div className="scroll">
         <Header />
         <main className="md:grid md:grid-cols-12  md:h-screen">
            <div className="md:col-span-3 w-full">
               <Sidebar />
            </div>

            {isLoading ? (
               <div class=" flex items-center justify-center md:col-span-9 w-full space-x-10">
                  <div class="animate-spin bg-blue-800 w-10 h-10 rounded-lg"></div>{" "}
                  <div class="animate-spin bg-blue-800 w-10 h-10 rounded-lg"></div>{" "}
                  <div class="animate-spin bg-blue-800 w-10 h-10 rounded-lg"></div>{" "}
               </div>
            ) : user.id ? (
               <div className="md:col-span-9 w-full"> {children}</div>
            ) : (
               <div className=" md:col-span-9 w-full flex items-center">
                  {" "}
                  <Login className="w-1/3" />
                  <div className="w-2/3 flex justify-center text-center">
                     <div>
                        <h1 className="text-7xl font-extrabold text-blue-700">
                           Banky $$$
                        </h1>
                        <div className="w-1/2 mx-auto mt-10">
                           <p className="text-4xl font-semibold text-blue-600">
                              Next.js React Redux Tailwind GraphQL Prisma Bank
                              App Clone
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </main>
      </div>
   );
}
export default Layout;
