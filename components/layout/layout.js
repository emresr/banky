import Header from "./header";
import Sidebar from "./sidebar";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { checkToken } from "../../redux/actions/user";

function Layout({ children }) {
   const dispatch = useDispatch();
   const token = useSelector((state) => state.user.token);
   const user = useSelector((state) => state.user);

   useEffect(() => {
      if (!token) {
         console.log("token yok");
         if (Cookies.set("token")) {
            //   dispatch(checkToken(Cookies.get("token")));
            console.log(Cookies.get("token"));
         }
      }
   }, [token]);

   return (
      <div className="scroll">
         <Header />
         <main className="md:grid md:grid-cols-12  md:h-screen">
            <div className="md:col-span-3 w-full">
               <Sidebar />
            </div>
            <div className="md:col-span-9 w-full"> {children}</div>{" "}
         </main>
      </div>
   );
}
export default Layout;
