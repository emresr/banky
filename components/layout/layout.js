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

   console.log("local", localStorage.getItem("token"));

   useEffect(() => {
      if (!token) {
         console.log("token yok");
         if (localStorage.getItem("token")) {
            console.log("token alcam lcoalden");
            dispatch(checkToken(localStorage.getItem("token")));
            Cookies.set("token", localStorage.getItem("token"));
            console.log(Cookies.get("token"));
         } else {
            Cookies.remove("token");
         }
      } else {
         console.log("token var", token);
      }
   }, [token]);

   console.log("token", Cookies.get("token"));
   console.log("user", user);
   return (
      <div className="">
         <Header />
         <main className="grid grid-cols-12  h-screen">
            <div className="col-span-3">
               <Sidebar />
            </div>
            <div className="col-span-9"> {children}</div>{" "}
         </main>
      </div>
   );
}
export default Layout;
