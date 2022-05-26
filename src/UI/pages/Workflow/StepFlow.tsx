import { Procedure } from "hooks/types";
import useDataContext from "hooks/useDataContext";
import { useState } from "react";
import ReactFlow from "react-flow-renderer";
import { useParams } from "react-router-dom";

const Flow = () => {
  const { data: workflows } = useDataContext();

  let params = useParams();

  const workflow = workflows.find(
    (workflow) => workflow.id.toString() === params.id
  );

  const procedures = JSON.parse(workflow ? workflow.procedures : "[]");

  const initialNodes = procedures.map((procedure: Procedure, index: number) => {
    const indexer = index + 1;

    if (procedure.substeps?.length) {
      return {
        id: indexer.toString(),

        data: {
          label: (
            <>
              {procedure.step} <br />
              substeps: {procedure.substeps.join("\n")},
            </>
          ),
        },
        position: { x: 100, y: 2 },
      };
    }
    return {
      id: indexer.toString(),

      data: { label: procedure.step },
      position: { x: 100, y: 125 },
    };
  });

  const initialEdges = procedures.map((_: any, index: number) => {
    const indexer = index + 1;

    const nextIndexer = indexer + 1;

    return {
      id: `e${indexer}-${nextIndexer}`,
      source: `${indexer}`,
      target: `${nextIndexer}`,
    };
  });

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return <ReactFlow nodes={nodes} edges={edges} fitView />;
};

export default Flow;
