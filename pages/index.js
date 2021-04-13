import Layout from "../components/layout/layout";

import Head from "next/head";
import Image from "next/image";
function HomePage() {
   return (
      <div>
         <Head>
            <title>banky</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Layout className="">
            <div className="mt-4 ml-3 ">
               <h1 className="text-3xl ">Hello Emre</h1>
            </div>
         </Layout>
      </div>
   );
}
export default HomePage;
