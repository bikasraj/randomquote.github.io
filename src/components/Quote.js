import React from 'react';

const Quote = ({ text, author }) => {
  return (
    <div className="quote">
      <p className="quote-text">"{text}"</p>
      <p className="quote-author">- {author}</p>
    </div>
  );
};

export default Quote;
