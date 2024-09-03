// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./BaseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handles = [
    { type: "target", id: `${id}-value`, position: Position.Left },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      style={{ width: 200, height: 80, border: "1px solid black" }}
      handles={handles}
    >
      <div>
        <span>Output</span>
      </div>
      <div>
        <label>
          Name:
          <input type="text" value={currName} onChange={handleNameChange} />
        </label>
        <label>
          Type:
          <select value={outputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );

  // return (
  //   <div style={{width: 200, height: 80, border: '1px solid black'}}>
  //     <Handle
  //       type="target"
  //       position={Position.Left}
  //       id={`${id}-value`}
  //     />
  //     <div>
  //       <span>Output</span>
  //     </div>
  //     <div>
  //       <label>
  //         Name:
  //         <input
  //           type="text"
  //           value={currName}
  //           onChange={handleNameChange}
  //         />
  //       </label>
  //       <label>
  //         Type:
  //         <select value={outputType} onChange={handleTypeChange}>
  //           <option value="Text">Text</option>
  //           <option value="File">Image</option>
  //         </select>
  //       </label>
  //     </div>
  //   </div>
  // );
};
