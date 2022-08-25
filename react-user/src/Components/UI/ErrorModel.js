import React from "react";
import Card from "./Card";
import "./ErrorModel.css";

function ErrorModel(props) {
  return (
    <div className="backdrop">
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <button onClick={props.close}>Close</button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModel;
