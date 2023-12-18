// TODO: Accessing the AuthStorage instance with useContext(AuthStorageContext)

import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

const useAuthStorage = () => {
  return useContext(AuthStorageContext);
};

export default useAuthStorage;
