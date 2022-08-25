import { useState } from "react";
import "./App.css";
import UserDisplay from "./Components/UserDisplay/UserDisplay";
import UserInfoInput from "./Components/UserInfo/UserInfoInput";

function App() {
  const [userDataList, setUserDatList] = useState([]);

  const addUserInfo = (user, age) => {
    setUserDatList((prevdata) => {
      return [...prevdata, { id: Math.random(), user: user, age: age }];
    });
  };

  return (
    <div className="App">
      <UserInfoInput addUser={addUserInfo} />
      <UserDisplay displayData={userDataList} />
    </div>
  );
}

export default App;
