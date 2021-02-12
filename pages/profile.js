import Layout from "../components/layout/layout";
import ProfileCard from "../components/profile/profilecard";
import History from "../components/profile/history";

import Link from "next/link";
export default function Profile() {
  return (
    <div>
      <>
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden sm:w-2/3">
            <div className="ml-40 mt-5">
              <History />
            </div>
          </div>
          <div className="w-full bg-green-200  overflow-hidden sm:w-1/3">
            <ProfileCard />
          </div>
        </div>
      </>
    </div>
  );
}
