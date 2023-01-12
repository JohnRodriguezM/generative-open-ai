import { useState, createContext, useCallback } from "react";

interface DataProps {
  data: any[];
  setData: React.Dispatch<any>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DataContext = createContext<DataProps>({
  data: [],
  setData: () => {},
  loading: false,
  setLoading: () => {},
});

export const DataProvider = ({ children }: any) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const dataObject = {
    data,
    setData,
    loading,
    setLoading,
  };
  return (
    <DataContext.Provider value={dataObject}>{children}</DataContext.Provider>
  );
};
