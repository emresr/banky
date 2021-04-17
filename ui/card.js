const Card = ({}) => {
   return (
      <div class=" w-96">
         <div class=" bg-gradient-to-r from-purple-500 to-red-300 rounded-lg">
            <div class="w-full p-4">
               <div class="flex justify-between items-center text-white">
                  {" "}
                  <span class="text-3xl font-bold">
                     12,290 <small class="text-sm font-light">USD</small>
                  </span>{" "}
               </div>
               <div className="">
                  <h1 className="text-4xl text-white">**** **** **** ****</h1>
               </div>
               <div class="flex justify-between items-center mt-10">
                  <div class="w-full mt-8 flex justify-between items-center text-white">
                     <div class="">
                        {" "}
                        <span class="font-bold">Emre Sr</span>{" "}
                     </div>
                     <div class="flex flex-col">
                        {" "}
                        <span class="font-bold text-white text-sm">
                           Expires
                        </span>
                        <span class="font-bold">01/21</span>{" "}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Card;
