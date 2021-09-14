import React, { useState } from "react";
import Dropdown from "./dropdown";
import LineGraph from "./linegraph";
const Dashboard = () => {
  const [currentState, setCurrentState] = useState({ id: 1 });

  return (
    <div style={{ marginTop: "70px", color: "#33cccc" }}>
      <Dropdown currentState={currentState} setCurrentState={setCurrentState} />
      <br />
      <LineGraph currentState={currentState} />
    </div>
  );
};

export default Dashboard;
