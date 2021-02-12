import Layout from "../../components/dashboard/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
function Users() {
  return (
    <div>
      <Head>
        <title>Dashboard | banky</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div>
          <div className=" max-w-lg m-auto mt-6">
            <table className="w-full table-collapse">
              <thead>
                <tr>
                  <th class="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light text-center">
                    User
                  </th>
                  <th class="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light text-center">
                    Role
                  </th>
                  <th class="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light text-center">
                    Member Since
                  </th>
                  <th class="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light text-center">
                    Total amount
                  </th>
                  <th class="text-sm uppercase font-semibold text-grey-darker p-3 bg-grey-light"></th>
                </tr>
              </thead>
              <tbody className="">
                <tr class="group cursor-pointer hover:bg-grey-lightest">
                  <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-center">
                    Emre
                  </td>
                  <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-center ">
                    Admin
                  </td>
                  <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-center">
                    10.12.2020
                  </td>
                  <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-center">
                    $932
                  </td>
                  <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-sm group-hover:visible">
                    <div class="invisible group-hover:visible">
                      <a href="#" class="no-underline text-blue">
                        View
                      </a>{" "}
                      <span class="text-grey">|</span>
                      <a href="#" class="no-underline text-blue">
                        Edit
                      </a>{" "}
                      <span class="text-grey">|</span>
                      <a href="#" class="no-underline text-blue">
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
                <tr class="group cursor-pointer hover:bg-grey-lightest">
                  <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-center">
                    Emre
                  </td>
                  <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-center ">
                    Admin
                  </td>
                  <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-center">
                    10.12.2020
                  </td>
                  <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-center">
                    $932
                  </td>
                  <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-sm group-hover:visible">
                    <div class="invisible group-hover:visible">
                      <a href="#" class="no-underline text-blue">
                        View
                      </a>{" "}
                      <span class="text-grey">|</span>
                      <a href="#" class="no-underline text-blue">
                        Edit
                      </a>{" "}
                      <span class="text-grey">|</span>
                      <a href="#" class="no-underline text-blue">
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default Users;
