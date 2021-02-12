import Layout from "../../components/dashboard/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
function Orders() {
  return (
    <div>
      <Head>
        <title>History | banky</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div>
          <div className="mt-5 mx-3  ">
            <table className="min-w-full leading-normal mx-auto">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Items</th>
                  <th>Pickup Date</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                  <td>Mexico</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default Orders;
