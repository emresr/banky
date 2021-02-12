import Layout from "../components/layout/layout";
import Items from "../components/cart/items";
import Payout from "../components/cart/payout";
import Head from "next/head";

function Cart() {
  return (
    <div>
      <Head>
        <title>Cart | banky</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="flex flex-wrap overflow-hidden">
          <Items />
          <Payout />
        </div>
      </Layout>
    </div>
  );
}
export default Cart;
