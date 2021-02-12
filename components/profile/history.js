import Link from "next/link";
export default function History() {
  return (
    <div className="mt-0 ">
      <h1 className="font-bold text-2xl "> Order History</h1>
      <div className="inline-flex" id="main_menu">
        <ul className="flex flex-wrap p-1 md:p-2 sm:bg-gray-300 sm:rounded-md text-sm md:text-base">
          <li className="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0">
            <Link href="#">
              <a className="font-semibold whitespace-no-wrap text-blue-600 hover:text-blue-800">
                <span className="last firstlevel">Last 10</span>
              </a>
            </Link>
          </li>
          <li className="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0">
            <Link href="#">
              <a className="font-semibold whitespace-no-wrap text-blue-600 hover:text-blue-800">
                <span className="last firstlevel">Monthly</span>
              </a>
            </Link>
          </li>
          <li className="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0">
            <Link href="#">
              <a className="font-semibold whitespace-no-wrap text-blue-600 hover:text-blue-800">
                <span className="last firstlevel">All Time</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <ul className="w-full rounded-lg mt-2 mb-3 text-blue-800">
          <li className="block">
            <div className="">
              <Link href="#">
                <a className="inline w-fill rounded-lg flex p-4 bg-green-200 hover:bg-green-400">
                  Caramelatte + Donut x2
                </a>
              </Link>
              <p className="inline"> 19$</p>
            </div>
          </li>
          <li>
            <Link href="#">
              <a className="inline w-fill rounded-lg flex p-4 bg-green-200 hover:bg-green-400">
                Mocha x3 + 2 Water
              </a>
            </Link>
            <p className="inline"> 27$</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
