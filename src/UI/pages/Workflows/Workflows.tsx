import useDataContext from "hooks/useDataContext";
import { useEffect } from "react";
import Loader from "UI/molecules/Loader/Loader";
import Navbar from "UI/molecules/Navbar/Navbar";
import Card from "UI/templates/Card/Card";
import { WorkFlowContainer } from "../Workflow/Workflow.styles";
import { Cards } from "./Workflows.styles";

const Workflows = () => {
  const { data, loading, makeRequest } = useDataContext();

  useEffect(() => {
    makeRequest();
  }, [makeRequest]);

  return (
    <>
      <Navbar />
      <WorkFlowContainer>
        {loading ? (
          <Loader />
        ) : (
          <Cards>
            {data.map((datum, index) => (
              <Card key={index} datum={datum} />
            ))}
          </Cards>
        )}
      </WorkFlowContainer>
    </>
  );
};

export default Workflows;
