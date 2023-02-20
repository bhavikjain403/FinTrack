import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../../Redux/userSlice";

const Logout = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsLoggedIn());
    localStorage.removeItem("currentToken");
    toast.success("Logged out!");
  };
  return (
    <>
      <button onClick={handleClick}>Logout</button>
    </>
  );
};

export default Logout;
