import React, { useState } from "react";

const Context = (props) => {
  const [text, setText] = useState("");

  const addUpHandler = () => {
    let newText = text.toUpperCase(text);
    setText(newText);
    props.showAlert("convert to uppercase", "success");
  };

  const addLowHandler = () => {
    let newText = text.toLowerCase(text);
    setText(newText);
    props.showAlert("convert to Lowercase", "success");
  };
  const addClearHandler = () => {
    let newText = "";
    setText(newText);
    props.showAlert("clear text", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied text", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("remove extra space", "success");
  };
  const addOnHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div
        className={`textArea text-${props.mode === "dark" ? "light" : "dark"}`}>
        <div
          className={`container text-${
            props.mode === "dark" ? "light" : "dark"
          }`}>
          <h1>{props.heading}</h1>
          <textarea
            name="form-control my-1"
            id="myBox"
            value={text}
            onChange={addOnHandler}
            cols="150"
            rows="10"
            placeholder="Enter Your Text Here"
            className={`text-${props.mode === "dark" ? "light" : "dark"}`}
            style={{
              backgroundColor: props.mode === "dark" ? "lightgray" : "white",
            }}></textarea>
          <button onClick={addUpHandler} className="btn btn-success me-2">
            Convert to UpperCase
          </button>
          <button onClick={addLowHandler} className="btn btn-primary me-2">
            Convert to LowerCase
          </button>
          <button onClick={addClearHandler} className="btn btn-warning me-2">
            Clear Text
          </button>
          <button onClick={handleCopy} className="btn btn-primary me-2">
            Copy Text
          </button>
          <button onClick={handleExtraSpace} className="btn btn-primary me-2">
            Remove Extra Space
          </button>
        </div>

        <div className="container my-1">
          <h2>Text Summary</h2>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters.
          </p>
          <p>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            minutes need to read.
          </p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter text to preview"}</p>
        </div>
      </div>
    </div>
  );
};

export default Context;
