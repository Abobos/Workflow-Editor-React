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
              <b>substeps:</b> {procedure.substeps.join("\n")},
            </>
          ),
        },
        position: { x: 150 * index, y: 80 * index },

        style: {
          fontSize: "8px",
        },
      };
    }
    return {
      id: indexer.toString(),

      data: { label: procedure.step },
      position: { x: 100, y: 100 * index },
      style: {
        fontSize: "8px",
      },
    };
  });

  let initialEdges = procedures.map((_: any, index: number) => {
    const indexer = index + 1;

    const nextIndexer = indexer + 1;

    return {
      id: `e${indexer}-${nextIndexer}`,
      source: `${indexer}`,
      target: `${nextIndexer}`,
    };
  });

  initialEdges = initialEdges.slice(0, initialEdges.length - 1);

  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);

  return <ReactFlow nodes={nodes} edges={edges} fitView />;
};

export default Flow;
