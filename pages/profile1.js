import Layout from "../components/layout/layout";
import ProfileCard from "../components/profile/profilecard";
import History from "../components/profile/history";

import Link from "next/link";
export default function Profile() {
  return (
    <div>
      <>
        <div className="container flex flex-wrap py-6 bg-green-500">
          <div className="w-full md:w-2/3 flex flex-col items-center px-3">
            <History />
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center px-3">
            <ProfileCard />
          </div>
        </div>
      </>
    </div>
  );
}
