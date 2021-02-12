import Image from "next/image";

function Payout() {
  return (
    <div className="w-full overflow-hidden sm:w-1/3">
      <div>
        <div className="ml-3 mt-5">
          <h1 className="inline mt-9 ml-5 mr-7 text-4xl font-extrabold">
            39$ at total
          </h1>
        </div>
        <div className="mt-4 ml-7 ">
          <div className="mb-3">
            <h1 className="font-bold text-base">For 5 items </h1>
            <h1 className="font-semibold text-lg"> Pick up time: 13:45</h1>
          </div>
        </div>
        <div className="w-full center-items  ">
          <button className="uppercase px-8 py-2 border border-green-600 text-green-600 max-w-max shadow-sm hover:shadow-lg">
            Payout
          </button>
        </div>
      </div>
    </div>
  );
}
export default Payout;
