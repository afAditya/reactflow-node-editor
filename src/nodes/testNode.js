import { useState, useEffect } from "react";
import { Position } from "reactflow";
import BaseNode from "./BaseNode";

export const TestNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "");
  const [handles, setHandles] = useState([
    { id: `${id}-test`, type: "source", position: Position.Right },
  ]);
  const handleTestChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      type="text"
      data={data}
      style={{ border: "1px solid black" }}
      handles={handles}
    >
      <div>
        <span>Test</span>
      </div>
      <div>
        <label>
          Input:
          <input
            type="text"
            value={currText}
            onChange={handleTestChange}
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        </label>
      </div>
    </BaseNode>
  );
};

export default TestNode;
