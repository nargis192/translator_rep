import { useState } from 'react';
import './App.css';

function App() {
  const [language,setLanguage]=useState("hi");
// console.log(language);
  return (
    <div className="App">
      <h1>Language Translator</h1>
      <div className='upper-class'>
      <div className="input-container">
        <textarea id="inputTextArea" placeholder="Enter text to translate"></textarea>
        <div id="outputLanguageSelector">
        <p>Select the Language: </p>
        <select onChange={(e)=>setLanguage(e.target.value)} value={language}>
          <option value="hi">Hindi</option>
          <option value="en">English</option>
        </select>
        </div>
      </div>

      <div className="output-container">
       
        <textarea id="outputTextArea" readOnly placeholder='Translated Text'></textarea>
        {/* <div id="outputLanguageSelector">
        <p>Select the Language: </p>
        <select >
          <option value="hindi">Hindi</option>
          <option value="english">English</option>
        </select>
        </div> */}
        
      </div>
      </div>
      <div className="button-container">
        <button >Translate</button>
      </div>
      
      
     
    </div>
  );
}

export default App;


