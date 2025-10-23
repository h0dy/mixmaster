/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, type PropsWithChildren } from "react";

type AppContextType = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [searchTerm, setSearchTerm] = useState(".");
  return (
    <AppContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
