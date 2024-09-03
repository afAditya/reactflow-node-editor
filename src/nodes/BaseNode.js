import React from "react";
import { Handle } from "reactflow";
import styles from "./BaseNode.module.css";

const BaseNode = ({ id, type, data, style, handles, children }) => {
  return (
    <div className={styles.node} style={style}>
      <div className={styles.nodeHeader}>{data.label}</div>
      <div className={styles.nodeInput}>{children}</div>
      {handles?.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.type}-${index}`}
          style={handle.style}
        />
      ))}
    </div>
  );
};

export default BaseNode;
