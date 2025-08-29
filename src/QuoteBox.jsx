import { useState, useEffect } from "react";
import quotes from "./quotes.json";
import "./styles.scss";
import { FaTwitter } from "react-icons/fa";


const colors = ["#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c", "#9b59b6", "#FB6964"];

export default function QuoteBox() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [bgColor, setBgColor] = useState("#16a085");

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote(randomQuote);

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
    document.body.style.transition = "background-color 1s ease";
    document.body.style.backgroundColor = randomColor;
  };

  return (
    <div className="quote-box">
        <p id="text">{quote.text}</p>
        <p id="author">{quote.author ? `- ${quote.author}` : "- Unknown"}</p>

        <button
            id="new-quote"
            className="btn"
            style={{ backgroundColor: bgColor, color: "#fff", transition: "background-color 1s ease"}}
            onClick={getRandomQuote}
        >
            New Quote
        </button>


        <a
            id="tweet-quote"
            className="tweet-btn"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote.text} - ${quote.author}`)}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaTwitter size={24} />
        </a>
    </div>
  );
}
