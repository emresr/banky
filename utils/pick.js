import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./../redux/actions/user";
import { getAccount } from "./../redux/actions/account";

const Pick = (id) => {
   const dispatch = useDispatch();
   const account = useSelector((state) => state.accounts);
   console.log("lmao", account);

   useEffect(() => {
      dispatch(getAccount(id));
   }, []);
};

export default Pick;
