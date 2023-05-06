import React from "react";
import "./Error.css";
import { InfoCircleFilled } from "@ant-design/icons";

const Error = () => {
  return (
    <div className="error-container">
      <InfoCircleFilled className="error-icon" /> {message}
    </div>
  );
};

export default Error;
