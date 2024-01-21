import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ListQuotes from "./Components/ListQuotes";
import Quote from "./Components/Quote";
import { LuRefreshCw } from "react-icons/lu";
import { FaHome } from "react-icons/fa";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState({});
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [modeAuthor, setModeAuthor] = useState(false);
  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = () => {
    axios
      .get("https://api.quotable.io/quotes")
      .then((response) => {
        const randomIndex = Math.floor(
          Math.random() * response.data.results.length
        );
        setQuotes(response.data.results);
        setRandomQuote(response.data.results[randomIndex]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    setRandomQuote(quote);
    setSelectedAuthor("");
    setModeAuthor(false);
  };

  return (
    <div className="app">
      <button className="button-random" onClick={handleRandomQuote}>
        {modeAuthor ? (
          <>
            Back{" "}
            <div className="icon-button">
              <FaHome />
            </div>
          </>
        ) : (
          <>
            Random
            <div className="icon-button">
              <LuRefreshCw />
            </div>
          </>
        )}
      </button>
      <div className="content">
        {!modeAuthor ? (
          <>
            {randomQuote && (
              <div>
                <Quote
                  quote={randomQuote}
                  setSelectedAuthor={setSelectedAuthor}
                  setModeAuthor={setModeAuthor}
                />
              </div>
            )}
          </>
        ) : (
          <>
            {selectedAuthor && (
              <div>
                <h2>{selectedAuthor}:</h2>
                <ListQuotes
                  ListQuotes={quotes}
                  author={selectedAuthor}
                  modeAuthor={modeAuthor}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
