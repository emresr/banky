import Header from "./header";
import Sidebar from "./sidebar";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { checkToken, lmao } from "../../redux/actions/user";

function Layout({ children }) {
   const dispatch = useDispatch();
   const token = useSelector((state) => state.user.token);
   const user = useSelector((state) => state.user);
   console.log(user);

   useEffect(() => {
      console.log("kk");
      const user = checkToken();
      //  console.log(user);
   }, []);

   return (
      <div className="scroll">
         <Header />
         <main className="md:grid md:grid-cols-12  md:h-screen">
            <div className="md:col-span-3 w-full">
               <Sidebar />
            </div>
            {user.id ? (
               <div className="md:col-span-9 w-full"> {children}</div>
            ) : (
               <h1>Login page</h1>
            )}
         </main>
      </div>
   );
}
export default Layout;
