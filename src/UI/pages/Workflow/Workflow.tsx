import Layout from "UI/templates/Layout";
import StepFlow from "./StepFlow";
import { WorkFlowContainerII } from "./Workflow.styles";

const Workflow = () => {
  return (
    <Layout>
      <WorkFlowContainerII>
        <StepFlow />
      </WorkFlowContainerII>
    </Layout>
  );
};

export default Workflow;
