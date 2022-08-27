import React, { useState, useEffect } from "react";
import AuthContext from "./components/context/auth-context";

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
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandeler }}
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandeler} />}
        {isLoggedIn && <Home onLogout={logoutHandeler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
