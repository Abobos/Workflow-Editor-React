import useDataContext from "hooks/useDataContext";
import { HTTPREQUESTMETHOD } from "hooks/useRequest";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Button, { ButtonType } from "UI/atoms/Button/Button";

import Input from "UI/atoms/Input/Input";
import Select from "UI/atoms/Select/Select";
import TextArea from "UI/atoms/TextArea/TextArea";
import Layout from "UI/templates/Layout";
import { StyledForm } from "./WorkflowForm.styles";

const WorkflowForm = () => {
  const [data, setData] = useState({
    name: "",
    version: 1,
    scope: "",
    apparatus: [""],
    definitions: [
      {
        name: "",
        description: "",
      },
    ],
    procedures: [
      {
        step: "",
      },
    ],
  });

  const [definitionName, setDefinitionName] = useState("");
  const [definitionDetail, setDefinitionDetail] = useState("");
  const [steps, setDefinitionSteps] = useState("");

  const navigate = useNavigate();

  const { data: result, error, loading, makeRequest } = useDataContext();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLDivElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    event.preventDefault();
    const currentTarget = event.target as any;

    let changedData = { ...data };

    if (
      currentTarget.name !== "apparatus" &&
      currentTarget.name !== "definitions" &&
      currentTarget.name !== "procedures" &&
      currentTarget.name !== "definitionName" &&
      currentTarget.name !== "definitionDetail"
    ) {
      changedData = {
        ...changedData,
        [currentTarget.name]: currentTarget.value,
      };
    }

    switch (currentTarget.name) {
      case "apparatus": {
        const newApparatus = [];

        for (let option of currentTarget.options) {
          if (option.selected) newApparatus.push(option.value);
        }

        changedData = {
          ...changedData,
          apparatus: newApparatus,
        };

        break;
      }

      case "definitionName":
      case "definitionDetail": {
        let newDefinition = { name: "", description: "" };

        if (definitionName && definitionDetail) {
          newDefinition = {
            name: definitionName,
            description: definitionDetail,
          };
        }

        changedData = {
          ...changedData,
          definitions: [newDefinition],
        };

        if (currentTarget.name === "definitionName")
          setDefinitionName(currentTarget.value);

        if (currentTarget.name === "definitionDetail")
          setDefinitionDetail(currentTarget.value);

        break;
      }
      case "steps": {
        const multipleSteps = currentTarget.value.split(",");

        const procedures = multipleSteps.map((step: string) => ({
          step,
        }));

        changedData = {
          ...changedData,
          procedures,
        };

        setDefinitionSteps(currentTarget.value);

        break;
      }
    }

    setData(changedData);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    makeRequest(data, HTTPREQUESTMETHOD.POST);
  };

  if (!error && result) navigate("/workflow", { replace: true });

  return (
    <Layout>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          name="name"
          onChangeFunction={handleChange}
          content={data.name}
          placeholder={"Name of Workflow"}
        />
        <TextArea
          name="scope"
          onChangeFunction={handleChange}
          content={data.scope}
          placeholder={"Enter Scope"}
        />

        <Select
          name="apparatus"
          onChangeFunction={handleChange}
          selectOptions={[
            "Burrete",
            "Pipette",
            "Pipettor",
            "Distilled Water",
            "Beaker",
            "Cubis Analytical Balance",
          ]}
        />
        <small style={{ fontSize: "13px" }}>
          Hold ctrl to select multiple apparatus
        </small>

        <TextArea
          name="definitionName"
          onChangeFunction={handleChange}
          content={definitionName}
          placeholder={"Name of definition"}
        />

        <TextArea
          name="definitionDetail"
          onChangeFunction={handleChange}
          content={definitionDetail}
          placeholder={"Enter definition"}
        />

        <TextArea
          name="steps"
          onChangeFunction={handleChange}
          content={steps}
          placeholder={"Enter Workflow Steps"}
        />

        <small style={{ fontSize: "13px" }}>
          Hold ctrl to select multiple apparatus
        </small>

        <Button
          buttonType={ButtonType.Submit}
          text={loading ? "Creating Workflow" : "Create Workflow"}
          disable={loading}
        />
      </StyledForm>
    </Layout>
  );
};

export default WorkflowForm;
