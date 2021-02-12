import Header from "./header";
import Header1 from "./header1";
import Sidebar from "./sidebar";
import Image from "next/image";
import Header2 from "./header2";
import Header4 from "./header4";

function Layout({ children }) {
  return (
    <div>
      <div className="flex flex-wrap overflow-hidden bg-green-500">
        <div className="w-full overflow-hidden">
          <Header />
        </div>
        <div className="w-1/6 overflow-hidden">
          <Sidebar />
        </div>

        <div className="w-5/6 overflow-hidden">
          <main className="auto bg-white ">{children}</main>
        </div>
      </div>
      <div className="h-screen flex flex-col h-screen justify-between"></div>
    </div>
  );
}
export default Layout;
