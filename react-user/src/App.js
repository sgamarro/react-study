import { useState } from "react";
import "./App.css";
import UserDisplay from "./Components/UserDisplay/UserDisplay";
import UserInfoInput from "./Components/UserInfo/UserInfoInput";

function App() {
  const [userDataList, setUserDatList] = useState([]);

  const addUserInfo = (e) => {
    console.log(userDataList);
    setUserDatList((data) => {
      return [...data, e];
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
