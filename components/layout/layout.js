import Header from "./header";
import Sidebar from "./sidebar";
import Image from "next/image";

function Layout({ children }) {
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
