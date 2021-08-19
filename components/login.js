import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../redux/actions/user";
import Router from "next/router";
const Login = () => {
   const dispatch = useDispatch();
   const data = useSelector((state) => state.user);
   const token = useSelector((state) => state.user.token);
   const loginError = useSelector((state) => state.user.errorLogin);
   const registerError = useSelector((state) => state.user.errorRegister);

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [name, setName] = useState("");
   const [errorMessage, setErrorMessage] = useState("");

   const [isLogin, setIsLogin] = useState(true);

   const onSubmit = async (e) => {
      e.preventDefault();
      setErrorMessage("");
      if (!email || !password) {
         return;
      }
      if (isLogin) {
         dispatch(login(email, password)).then(
            (data) => data && console.log("data", data)
         );
      } else {
         const registered = await dispatch(signup(name, email, password));
         console.log("reg", registered);
      }
   };

   return (
      <div className="">
         <div>
            <div>
               <div className="text-center ">
                  <h1 className="font-bold text-3xl">
                     {isLogin ? "Login " : "Register"}
                  </h1>
               </div>
               <div className="w-full relative mt-6">
                  <button
                     onClick={() => {
                        setIsLogin(!isLogin);
                     }}
                     className="right-0 absolute text-blue-700 font-bold underline"
                  >
                     {isLogin ? "Create account" : "Have account?"}
                  </button>
               </div>
            </div>
            <form
               className="w-96 px-24 pt-12 pb-8 text-center "
               onSubmit={onSubmit}
            >
               <div className="mb-4 ">
                  <input
                     className="w-full px-3 py-2 text-center border-blue-600 border-2 text-gray-800 rounded-md outline-none dark:bg-dark-200"
                     name="email"
                     placeholder="email"
                     required
                     onChange={(e) => setEmail(e.target.value)}
                     value={email}
                  />
               </div>
               <div className="mb-4 ">
                  <input
                     className="w-full px-3 py-2 text-center border-blue-600 border-2 text-gray-800 rounded-md outline-none dark:bg-dark-200"
                     type="password"
                     required
                     name="password"
                     placeholder="password"
                     onChange={(e) => setPassword(e.target.value)}
                     value={password}
                  />
               </div>
               {!isLogin && (
                  <div className="mb-4 ">
                     <input
                        className="w-full px-3 py-2 text-center border-blue-600 border-2 text-gray-800 rounded-md outline-none dark:bg-dark-200"
                        name="name"
                        placeholder="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                     />
                  </div>
               )}

               <div className="w-full">
                  <button
                     className="px-5 py-1 rounded-lg bg-blue-900 text-gray-100 my-auto hover:bg-blue-700"
                     type="submit"
                  >
                     {isLogin ? "Login " : "Register"}
                  </button>
               </div>
               {isLogin && loginError && <h1>{loginError}</h1>}
               {!isLogin && registerError && <h1>{registerError}</h1>}
            </form>
         </div>
      </div>
   );
};

export default Login;
