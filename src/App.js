import './App.css';
import axios from "axios";
import React, { useState } from 'react';

function App() {
  const [input, changeInput] = useState('');
  const [output, changeOutput] = useState('');
  const [language, changeLanguage] = useState('hi'); // Changed to lowercase for consistency

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
        target: language, // Use selected language from state
        q: input
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response); 
      changeOutput(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Language Translator</h1>
      <div className='upper-class'>
        <div className="input-container">
          <textarea id="inputTextArea" placeholder="Enter text to translate" value={input} onChange={(e) => changeInput(e.target.value)}></textarea>
        </div>

        <div className="output-container">
          <textarea id="outputTextArea" readOnly placeholder='Translated Text' value={output}></textarea>
        </div>
      </div>

      <div id="outputLanguageSelector">
        <p>Select the Language: </p>
        <select onChange={(e) => changeLanguage(e.target.value)} value={language}>
          <option value="hi">Hindi</option>
          <option value="en">English</option>
          <option value="mr">Marathi</option>
          <option value="pa">Punjabi</option>
          <option value="kn">Kannada</option>
          <option value="gu">Gujarati</option>
          <option value="fr">French</option>
          <option value="ar">Arabic</option>
        </select>
      </div>

      <div className="button-container">
        <button onClick={translate}>Translate</button>
      </div>
    </div>
  );
}

export default App;

