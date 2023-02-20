import { useEffect } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../Redux/userSlice";

const useGetUserData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    Axios.get(
      `https://hack-niche-outliers.vercel.app/api/v1/users`,
      {}
    ).then((res) => {
      // @ts-ignore
      dispatch(getAllUsers(res.data));
    });
  }, [dispatch]);
};

export default useGetUserData;
