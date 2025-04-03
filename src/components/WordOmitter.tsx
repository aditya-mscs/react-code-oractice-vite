import React, { useCallback,useState } from "react";
import GoBackToHome from "./GoBacktoHome";

const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

// ✅ When to Keep Outside:
// 	•	The function is pure and stateless (does not rely on any local state or props).
// 	•	You might want to reuse it across multiple components.
// 	•	It does not need to be re-created on every render.

function replaceOmittedWords(input: string) {
  const words = input.split(" ");
  const replacedWords = words.map((word) => {
    // array.some
    if (OMITTED_WORDS.some(omitted => omitted.toLowerCase() === word.toLowerCase())) {
      return '';
    } else
      return word; // Keep the original word
  });
  return replacedWords.join(" ");
}




function WordOmitter() {
  const [inputText, setInputText] = useState("I am a software engineer");
  const [omitWords, setOmitWords] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const toggleOmitWords = () => {
    setOmitWords(!omitWords);
  };

  const clearFields = () => {
    setInputText('');
  };

  const getProcessedText = useCallback(() => {
    return omitWords? replaceOmittedWords(inputText): inputText;
  }, [inputText, omitWords]);

  return (
    <div className="omitter-wrapper">
      <GoBackToHome />
      <h1>Word Omitter</h1>
      <textarea
        placeholder="Type here..."
        value={inputText}
        onChange={handleInputChange}
        data-testid="input-area"
      />
      <div>
        <p>Omit the following words: {OMITTED_WORDS.join(", ")}</p>
        <button type="button" onClick={toggleOmitWords} data-testid="action-btn">
          {omitWords ? "Show All Words" : "Omit Words"}
        </button>
        <button type="button" onClick={clearFields} data-testid="clear-btn">
          Clear
        </button>
      </div>
      <div>
        <h2>Output:</h2>
        <p data-testid="output-text">{getProcessedText()}</p>
      </div>
    </div>
  );
}

export { WordOmitter };
