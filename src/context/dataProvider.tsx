import useRequest from "hooks/useRequest";

import DataContext from "./dataContext";

const DataProvider = (props: any) => {
  const [data, error, loading, makeRequest] = useRequest();

  return (
    <DataContext.Provider
      value={{ data, error, loading, makeRequest }}
      {...props}
    />
  );
};

export default DataProvider;
