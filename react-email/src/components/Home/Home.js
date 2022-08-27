import React from "react";
import Botton from "../UI/Botton/Botton";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

function Home(props) {
  return (
    <Card className={classes.home}>
      <h1>Welcome Back</h1>
      <Botton onClick={props.onLogout}>Logout</Botton>
    </Card>
  );
}

export default Home;
