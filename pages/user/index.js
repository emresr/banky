import Layout from "../../components/dashboard/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
function Orders() {
  return (
    <div>
      <Head>
        <title>Dashboard | banky</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="mt-2 ml-5">
          <h1> Emre</h1>
          <div className="mt-2 ml-3">
            <h1>Last Orders</h1>
            <h2> Mocha x2 - $9.55</h2>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default Orders;
