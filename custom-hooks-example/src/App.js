import React from "react";
import BackwardCounter from "./components/BackwardCounter";
import FowardCounting from "./components/FowardCounting";

function App() {
  return (
    <React.Fragment>
      <FowardCounting />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default App;
