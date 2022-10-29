import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";
const NewQuote = () => {
  const addQuoteHandeler = (quoteData) => {
    console.log(quoteData);
  };

  return (
    <div>
      <QuoteForm onAddQuote={addQuoteHandeler} />
    </div>
  );
};

export default NewQuote;
