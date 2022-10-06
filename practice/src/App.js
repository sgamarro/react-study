import { useState, useCallback } from "react";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleparagraph = () => {
    setShowParagraph((prevParagraph) => !prevParagraph);
  };

  return (
    <div className="App">
      <h1>Hi there!!</h1>
      <DemoOutput show={showParagraph} />
      <button onClick={toggleparagraph}>Show Paragraph</button>
    </div>
  );
}

export default App;
