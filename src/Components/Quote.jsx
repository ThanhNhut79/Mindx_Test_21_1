import React from "react";
import { GrFormNextLink } from "react-icons/gr";

const Quote = ({ quote, setSelectedAuthor, setModeAuthor, modeAuthor }) => {
  console.log("quote.tag", quote);
  const handleClickAuthor = () => {
    setModeAuthor(true);
    setSelectedAuthor(quote.author);
  };
  return (
    <div className="container">
      <div className="quote">
        <h3>"{quote.content}"</h3>
        {!modeAuthor && (
          <div className="author-tags" onClick={handleClickAuthor}>
            <div className="author-top">
              <span>{quote.author}</span>
              {quote.tags && quote.tags.length > 0 && (
                <p>
                  {quote.tags.map((val) => {
                    return val;
                  })}
                </p>
              )}
            </div>
            <div>
              <GrFormNextLink />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quote;
