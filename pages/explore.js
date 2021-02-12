import Layout from "../components/layout/layout";
import Link from "next/link";
export default function Explore() {
  return (
    <div>
      <Layout>
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden sm:w-2/3">
            <div className="ml-40 mt-5">
              <h1 className="font-bold text-2xl "> Community Ranking</h1>
              <div className="inline-flex" id="main_menu">
                <ul className="flex flex-wrap p-1 md:p-2 sm:bg-gray-300 sm:rounded-md text-sm md:text-base">
                  <li className="relative mx-1 px-1 py-2 group bg-gray-300 rounded-full mb-1 md:mb-0">
                    <Link href="#">
                      <a className="font-semibold whitespace-no-wrap text-blue-600 hover:text-blue-800">
                        <span className="last firstlevel">Weekly</span>
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
              <ul className="w-full rounded-lg mt-2 mb-3 text-blue-800">
                <li>
                  <Link href="#">
                    <a className="w-fill rounded-lg flex p-4 bg-green-200 hover:bg-green-400">
                      Apple
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full bg-green-200  overflow-hidden sm:w-1/3">
            <h1 className="mt-9 ml-5 mr-7 text-4xl font-extrabold">
              {" "}
              Maybe Related Youu
            </h1>
            <div className="mt-4 ml-11 mr-11"></div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
