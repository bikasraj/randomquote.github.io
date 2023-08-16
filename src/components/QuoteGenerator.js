import React, { useState } from 'react';
import Quote from './Quote';

const QuoteGenerator = () => {
  const quotes = [
    { text: "The only limit is your imagination.", author: "Unknown" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    // Add more quotes here
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-generator">
      <Quote text={currentQuote.text} author={currentQuote.author} />
      <button onClick={generateRandomQuote}>Generate Random Quote</button>
    </div>
  );
};

export default QuoteGenerator;
