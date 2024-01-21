import React from "react";
import Quote from "./Quote";
const ListQuotes = ({ ListQuotes, author, modeAuthor }) => {
  console.log("list", author);
  const data = ListQuotes.filter((val) => val.author === author);
  return (
    <div>
      {data.map((quote) => (
        <Quote key={quote._id} quote={quote} modeAuthor={modeAuthor} />
      ))}
    </div>
  );
};

export default ListQuotes;
