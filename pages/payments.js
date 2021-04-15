import Layout from "../components/layout/layout";

import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./../redux/actions/user";
import CreditCard from "../ui/creditcard";
import { IoSearch, IoWaterSharp } from "react-icons/io5";
import { FcElectricity, FcExpand } from "react-icons/fc";
import { AiOutlineEdit } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
function HomePage() {
   const dispatch = useDispatch();
   const user = useSelector((state) => state.user);
   console.log("lmao", user);

   useEffect(() => {
      dispatch(getUser(1));
   }, []);

   const [adress, setAdress] = useState("Lmao St, no,312 , Cambridge");
   const [isEditOpen, setIsEditOpen] = useState(false);
   return (
      <div>
         <Head>
            <title>Payments</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Layout className="">
            <div className="grid grid-cols-12">
               <div className="mt-4 ml-3 col-span-8 ">
                  <div className="bg-gray-300 bg-opacity-50 p-2">
                     <h1 className="text-3xl ">Payments</h1>
                     <div className="mt-5">
                        <input className="w-1/2 bg-gray-400" /> <IoSearch />
                     </div>
                     <div className="flex space-x-2.5 mt-10 ">
                        <div className="border-black border-2 rounded-lg w-1/6">
                           <div className="w-full flex justify-center">
                              <div>
                                 <div className="flex justify-center">
                                    <FcElectricity size={60} />
                                 </div>
                                 <h1 className=" text-sm mx-2 my-2">
                                    Electricity
                                 </h1>
                              </div>
                           </div>
                        </div>
                        <div className="border-black border-2 rounded-lg w-1/6">
                           <div className="w-full flex justify-center ">
                              <div>
                                 <div className="">
                                    <IoWaterSharp size={60} />
                                 </div>
                                 <h1 className=" text-sm mx-2 my-2">Water</h1>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex justify-center">
                     <div className="bg-gray-100 p-2 rounded-full -my-5 ">
                        <FcExpand size={22} />
                     </div>
                  </div>
                  <div className="bg-gray-100 p-3">
                     <h1 className="text-2xl font-bold">Ready Payments</h1>
                     {!isEditOpen ? (
                        <div className="flex space-x-3">
                           <h1 className="text-gray-700 w-1/2 p-1">
                              Adress: {adress}
                           </h1>
                           <button
                              onClick={() => {
                                 setIsEditOpen(true);
                              }}
                              className="p-1 focus:outline-none"
                           >
                              <AiOutlineEdit />
                           </button>
                        </div>
                     ) : (
                        <div className="flex space-x-3">
                           <input
                              className="text-gray-700 w-1/2 p-1 rounded-lg"
                              value={adress}
                              onChange={(e) => setAdress(e.target.value)}
                           ></input>
                           <button
                              onClick={() => {
                                 setIsEditOpen(false);
                              }}
                              className=" bg-green-500 rounded-sm p-0.5"
                           >
                              <TiTick size={20} />
                           </button>
                        </div>
                     )}
                     <div>
                        <div className="border-gray border-2 bg-gray-100 flex p-2">
                           <div className="flex justify-center ">
                              <FcElectricity size={30} />
                           </div>
                           <h1>Electricity</h1>
                           <h1>$19,93</h1>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-span-4">
                  <h1>Latest Payments</h1>
               </div>
            </div>
         </Layout>
      </div>
   );
}
export default HomePage;
