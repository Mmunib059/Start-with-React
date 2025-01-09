import React, { useState, useRef } from 'react';

export default function Textform() {
  const [text, setText] = useState("Enter Text here");
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  const Upercasetext = (event) => {
    event.preventDefault();
    console.log("Clicked to Uppercase: " + text);
    let Upercasetxt = text.toUpperCase();
    setText(Upercasetxt);
  };

  const Lowercasetext = (event) => {
    event.preventDefault();
    console.log("Clicked to Lowercase: " + text);
    let lowercasetxt = text.toLowerCase();
    setText(lowercasetxt);
  };

  const handletext = (event) => {
    setText(event.target.value);
  };

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  };

  return (
    <>
      <div className='container'>
        <form className="row g-3 pt-5">
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Convert to Uppercase Text</label>
            <textarea 
              className="form-control" 
              value={text} 
              onChange={handletext} 
              ref={textAreaRef}
              id="exampleFormControlTextarea1" 
              rows="3">
            </textarea>
          </div>
          <div className="col-12">
            <button type="submit" onClick={Upercasetext} className="btn btn-primary mx-2">Convert to Uppercase</button>
            <button type="submit" onClick={Lowercasetext} className="btn btn-primary mx-2">Convert to Lowercase</button>
          </div>
        </form>
      </div>
      <div className="container my-4">
        <h1>Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        <button onClick={copyToClipboard} className="btn btn-secondary">Copy</button> 
        {copySuccess && <p>{copySuccess}</p>}
      </div>
    </>
  );
}
