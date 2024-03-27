import './App.css';
import axios from "axios";
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('hi'); // Changed state variable name to lowercase

  const translate = async (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      url: 'https://google-translator9.p.rapidapi.com/v2',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'ef8d1ff35fmsh2f4d84d6f15f726p1a8f64jsn681ea2c3f90a',
        'X-RapidAPI-Host': 'google-translator9.p.rapidapi.com'
      },
      data: {
        source: 'en',
        target: language,
        q: input
      }
    };

    try {
      const response = await axios.request(options);
      setOutput(response.data.data.translations[0].translatedText); // Access translations within response.data
    } catch (error) {
      console.error(error);
      // Handle error gracefully, e.g., setOutput('Error translating text');
    }
  };

  return (
    <div className="App">
      <h1>Language Translator</h1>
      <div className='upper-class'>
        <div className="input-container">
          <textarea id="inputTextArea" placeholder="Enter text to translate" value={input} onChange={(e) => setInput(e.target.value)}></textarea>
        </div>

        <div className="output-container">
          <textarea id="outputTextArea" readOnly placeholder='Translated Text' value={output}></textarea> {/* Remove onChange since it's a readOnly field */}
        </div>
      </div>

      <div id="outputLanguageSelector">
        <p>Select the Language to translate: </p>
        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
          {/* Options for language selection */}
        </select>
      </div>

      <div className="button-container">
        <button onClick={translate}>Translate</button>
      </div>
    </div>
  );
}

export default App;

