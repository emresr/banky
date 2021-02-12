import Layout from "../../components/dashboard/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
function Stocks() {
  return (
    <div>
      <Head>
        <title>Stocks | banky</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div>
          <div className="mt-5 mx-3  ">
            <table className="min-w-full leading-normal mx-auto">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Amount</th>
                  <th>Last Added </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Donut</td>
                  <td>15</td>
                  <td>10.12.2020</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default Stocks;
