import Layout from "UI/templates/Layout";
import StepFlow from "./StepFlow";
import { WorkFlowContainer } from "./Workflow.styles";

const Workflow = () => {
  return (
    <Layout>
      <WorkFlowContainer>
        <StepFlow />
      </WorkFlowContainer>
    </Layout>
  );
};

export default Workflow;
