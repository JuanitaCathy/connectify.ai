import React, { createContext, useContext } from "react";
import { useCodes } from "./use-codes";

type CodesContextType = ReturnType<typeof useCodes>;

const CodesContext = createContext<CodesContextType | undefined>(undefined);

export const CodesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const codes = useCodes();
  return (
    <CodesContext.Provider value={codes}>{children}</CodesContext.Provider>
  );
};

export const useCodesContext = () => {
  const context = useContext(CodesContext);
  if (!context) {
    throw new Error("useCodesContext must be used within a CodesProvider");
  }
  return context;
};