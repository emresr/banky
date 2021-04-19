const Card = ({}) => {
   return (
      <div className=" w-full">
         <div className=" bg-gradient-to-r from-purple-500 to-red-300 rounded-lg">
            <div className="w-full p-4">
               <div className="flex justify-between items-center text-white">
                  {" "}
                  <span className="text-3xl font-bold">
                     1290 <span className="">$</span>
                  </span>{" "}
               </div>
               <div className="">
                  <h1 className="text-4xl text-white">**** **** **** ****</h1>
               </div>
               <div className="flex justify-between items-center mt-10">
                  <div className="w-full mt-8 flex justify-between items-center text-white">
                     <div className="">
                        {" "}
                        <span className="font-bold">Emre Sr</span>{" "}
                     </div>
                     <div className="flex flex-col">
                        {" "}
                        <span className="font-bold text-white text-sm">
                           Expires
                        </span>
                        <span className="font-bold">01/21</span>{" "}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Card;
