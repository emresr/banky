import Image from "next/image";

function PriceChart() {
  return (
    <div className="w-full overflow-hidden sm:w-1/3">
      <h1 className="mt-9 ml-5 mr-7 text-4xl font-extrabold"> Prices</h1>
      <div className="mt-4 ml-11 mr-11">
        <div className="w-5/6">
          <div className="border-solid rounded-md  border-2 my-2 flex">
            <div className="max-w w-full">
              <div>
                <h2 className="font-bold text-2xl inline"> Mocha</h2>
                <h2 className="font-bold text-2xl inline"> $7.99</h2>
              </div>
              <div>
                <h2 className="font-bold text-2xl inline"> Latte</h2>
                <h2 className="font-bold text-2xl inline"> $8.99</h2>
              </div>
              <div>
                <h2 className="font-bold text-2xl inline"> Donut 5x</h2>
                <h2 className="font-bold text-2xl inline"> $10.99</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PriceChart;
