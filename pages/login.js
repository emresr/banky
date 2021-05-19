import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/user";
import Layout from "../components/layout/layout";
import Head from "next/head";

const Login = () => {
   const dispatch = useDispatch();
   const data = useSelector((state) => state.user);
   const token = useSelector((state) => state.user.token);
   const loginError = useSelector((state) => state.user.errorLogin);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [errorMessage, setErrorMessage] = useState("");

   const onSubmit = async (e) => {
      e.preventDefault();
      setErrorMessage("");

      dispatch(login(email, password));
   };

   return (
      <div>
         <Head>
            <title>Login | Banky</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Layout>
            <div>
               <form
                  className="w-full px-24 pt-12 pb-8 text-center "
                  onSubmit={onSubmit}
               >
                  {loginError && <h1>{loginError}</h1>}
                  <div className="mb-4">
                     <input
                        className="w-full px-3 py-2 text-center text-gray-800 rounded-md outline-none dark:bg-dark-200"
                        name="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                     />
                  </div>
                  <div className="mb-4">
                     <input
                        className="w-full px-3 py-2 text-center text-gray-800 rounded-md outline-none dark:bg-dark-200"
                        type="password"
                        required
                        name="password"
                        placeholder="şifre"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                     />
                  </div>
                  <button
                     className="px-5 py-1 rounded-full dark:bg-dark-200 dark:text-dark-600"
                     type="submit"
                  >
                     giriş yap
                  </button>
               </form>
            </div>
         </Layout>
      </div>
   );
};

export default Login;
