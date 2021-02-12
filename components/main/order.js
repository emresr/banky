import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { useState } from "react";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import Image from "next/image";

function Order() {
  return (
    <div className="w-full overflow-hidden sm:w-2/3">
      <div className="ml-40 mt-5">
        <h1> Pick Your Meal</h1>

        <div className="w-5/6">
          <div className="bg-purple-500">
            <h1>Coffees</h1>
            <div className="h-240 flex items-center ">
              <div className="flex-1 max-w-4xl mx-auto p-10 ">
                <ul className="grid grid-cols-3 gap-8">
                  <li className="bg-white rounded-lg shadow-xl">
                    <div className="h-24"></div>{" "}
                  </li>
                  <li className="bg-white rounded-lg shadow-xl">
                    <div className="h-24"></div>{" "}
                  </li>
                  <li className="bg-white rounded-lg shadow-xl">
                    <div className="h-24"></div>{" "}
                  </li>
                  <li className="bg-white rounded-lg shadow-xl">
                    <div className="h-24"></div>{" "}
                  </li>
                  <li className="bg-white rounded-lg shadow-xl">
                    <div className="h-24"></div>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <h1>Snacks</h1>
            <div className="h-240 flex items-center ">
              <div className="flex-1 max-w-4xl mx-auto p-10 ">
                <ul className="grid grid-cols-3 gap-8">
                  <li className="bg-white rounded-lg shadow-xl">
                    <div className="h-24 w-24">
                      <Image
                        className="m-4"
                        src="/mocha.jpg"
                        height={80}
                        width={88}
                        alt="Picture of the author"
                      />
                    </div>
                  </li>
                  <li className="bg-white rounded-lg shadow-xl">
                    <div className="h-24"></div>{" "}
                  </li>
                  <li className="bg-white rounded-lg shadow-xl">
                    <div className="h-24"></div>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Order;
