import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const dummyData = [
  {
    id: "q1",
    author: "Sebas",
    text: "Learning React",
  },
  {
    id: "q2",
    author: "Sebastian",
    text: "Learning React",
  },
];

const AllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={dummyData} />
    </div>
  );
};

export default AllQuotes;
