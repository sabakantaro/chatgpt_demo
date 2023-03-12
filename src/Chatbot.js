import React, { useState } from "react";
import { getChatResponse } from "./chatgpt";

function Chatbot() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await getChatResponse(input);
    setOutput(response);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea value={input} onChange={handleInputChange} />
        <button type='submit'>Send</button>
      </form>
      <div>{output}</div>
    </div>
  );
}

export default Chatbot;
