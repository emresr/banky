import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { useState } from "react";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

function All(posts) {
  const intialState = posts;

  const [characters, setCharacters] = useState(intialState.characters);

  return (
    <div className="w-full overflow-hidden sm:w-2/3">
      <div className="ml-40 mt-5">
        <h1> All Posts</h1>

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
                <h2 className="inline">Series </h2>
                <h2 className="inline">Posted by emre </h2>
                <h2 className="inline"> 2 hours ago</h2>
              </div>
              <h2 className="font-bold text-2xl"> Best crime series</h2>
              <p className="ml-3">
                {" "}
                Maybe line of duty. DS Steve Arnott is transferred to the
                anti-corruption unit after he refuses to participate in a
                cover-up that involves an innocent man getting shot in a police
                encounter. DS Steve Arnott is transferred to the anti-corruption
                unit after he refuses to participate in a cover-up that involves
                an innocent man getting shot in a police encounter.{" "}
              </p>
              <div className="float-right space-x-5 mt-2 mr-5">
                <p className="inline">Share</p>
                <p className="inline ">12 min</p>
              </div>
            </div>
          </div>
          <div className="border-solid border-2 my-2 ">
            <p>1</p>
            <h2> Best crime series</h2>
            <p> Maybe line of duty </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default All;
export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://gesback.herokuapp.com/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query {
        posts {
          title
          body
        }
      }
    `,
  });
  return {
    props: {
      lmaos: data.posts,
    },
  };
}
