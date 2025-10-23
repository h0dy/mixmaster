import { useContext } from "react";
import { AppContext } from "./context";

const useGlobalContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("Error in useContext");
  return { ...ctx };
};

export default useGlobalContext;
