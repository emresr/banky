import Image from "next/image";
import Link from "next/link";
function Sidebar() {
  return (
    <div>
      <div className="bg-grey-darkest relative h-full min-h-screen border-solid border-4">
        <div className="pt-2">
          <div className="xl:block uppercase font-bold text-grey-darker text-xs px-4 py-2">
            <h1>Main </h1>
            <div className="pt-2">
              <ul>
                <li>
                  <div className="my-2 border-solid border-2 h-10 w-full 	hover:bg-black-500  ">
                    <Link href="/dashboard/">
                      <a> General</a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="my-2 border-solid border-2 h-10 w-full">
                    <span className="p-2 bg-red-400">
                      <Link href="/dashboard/orders">
                        <a> Orders</a>
                      </Link>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="my-2 border-solid border-2 h-10 w-full">
                    <Link href="/dashboard/users">
                      <a> Users</a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="my-2 border-solid border-2 h-10 w-full 	hover:bg-black-500  ">
                    <Link href="/dashboard/history">
                      <a> History</a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="my-2 border-solid border-2 h-10 w-full">
                    <Link href="/dashboard/stocks">
                      <a> Stocks </a>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="group relative sidebar-item with-children"></div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
