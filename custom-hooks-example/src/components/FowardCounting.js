import Card from "./Card";
import useCounter from "../hooks/use-counter";

const FowardCounting = () => {
  const counter = useCounter(true);

  return <Card>{counter}</Card>;
};

export default FowardCounting;
