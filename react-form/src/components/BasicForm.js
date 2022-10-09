import React from "react";

const BasicForm = (props) => {
  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label>First Name</label>
          <input type={"text"} id="name" />
        </div>
        <div className="form-control">
          <label>Last Name</label>
          <input type={"text"} id="name" />
        </div>
      </div>
      <div className="form-control">
        <label>Email Adress</label>
        <input type={"text"} id="name" />
      </div>
      <div className="form-control">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
