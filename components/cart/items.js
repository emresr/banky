import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { useState } from "react";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

function Items(Items) {
  const intialState = items;

  const [characters, setCharacters] = useState(intialState.characters);

  return (
    <div className="w-full overflow-hidden sm:w-2/3">
      <div className="ml-40 mt-5">
        <h1> Items in Cart</h1>

        <div className="w-5/6">
          <div className="border-solid rounded-md  border-2 my-2 flex">
            <div className="w-9">
              <div className="ml-2 mt-5">
                <FiArrowUp className="w-4" />
                <p>1</p>
                <FiArrowDown />
              </div>
            </div>
            <div className="max-w w-full">
              <div className="space-x-3">
                <h2 className="inline">Mocha </h2>
                <h2 className="inline"> 9$ </h2>
              </div>
              <h2 className="font-bold text-2xl"> In 5 min</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Items;
export async function getStaticProps() {
  const client = new ApolloClient({
    uri: " ",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query {
        
      }
    `,
  });
  return {
    props: {
      items: data.items,
    },
  };
}
