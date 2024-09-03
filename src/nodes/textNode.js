// textNode.js

import { useState, useEffect } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "");
  const [handles, setHandles] = useState([
    { id: `${id}-text`, type: "source", position: Position.Right },
  ]);

  useEffect(() => {
    const regex = /\{\{(\w+)\}\}/g;
    let match;
    const newHandles = [];
    while ((match = regex.exec(currText)) !== null) {
      newHandles.push({
        type: "target",
        position: Position.Left,
        id: match[1],
      });
    }
    setHandles([
      { id: `${id}-text`, type: "source", position: Position.Right },
      ...newHandles,
    ]);
  }, [currText]);

  const lines = currText.split('\n');
  const width = Math.max(...lines.map(line => line.length)) * 8 + 20; 
  const height = lines.length * 20 + 20;

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      type="text"
      data={data}
      style={{ border: "1px solid black", width: `${width}px`, height: `${height}px` }}
      handles={handles}
    >
      <div>
        <span>Text</span>
      </div>
      <div>
        <label>
          Text:
          <input
            type="text"
            value={currText}
            onChange={handleTextChange}
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        </label>
      </div>
    </BaseNode>
  );
};

export default TextNode;
