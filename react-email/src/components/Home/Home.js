import React from "react";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

function Home(props) {
  return (
    <Card className={classes.home}>
      <h1>Welcom Back</h1>
    </Card>
  );
}

export default Home;
