import React, { useState, useEffect } from "react";

import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedInformation = localStorage.getItem("isLoggedIn");

    if (storedInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandeler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandeler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandeler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandeler} />}
        {isLoggedIn && <Home onLogout={logoutHandeler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
