import useDataContext from "hooks/useDataContext";
import { useEffect } from "react";
import Loader from "UI/molecules/Loader/Loader";
import Card from "UI/templates/Card/Card";
import Layout from "UI/templates/Layout";
import { Cards } from "./Workflows.styles";

const Workflows = () => {
  const { data, error, loading, makeRequest } = useDataContext();

  useEffect(() => {
    makeRequest();
  }, [makeRequest]);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <Cards>
          {data.map((datum, index) => (
            <Card key={index} datum={datum} />
          ))}
        </Cards>
      )}
    </Layout>
  );
};

export default Workflows;
