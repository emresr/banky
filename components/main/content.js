import Image from "next/image";
import PriceChart from "./pricechart";
import Order from "./order";
function Content() {
  return (
    <div className="flex flex-wrap overflow-hidden">
      <Order />
      <PriceChart />
    </div>
  );
}
export default Content;
