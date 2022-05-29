import Navbar from "UI/molecules/Navbar/Navbar";
import StepFlow from "./StepFlow";
import { WorkFlowContainerII } from "./Workflow.styles";

const Workflow = () => {
  return (
    <>
      <Navbar />
      <WorkFlowContainerII>
        <StepFlow />
      </WorkFlowContainerII>
    </>
  );
};

export default Workflow;
