import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Converted to Lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("Extra Spaces Removed!", "success");
  };

  const showAlert = (message, type) => {
    toast(message, { type });
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
          fontSize: "2.5rem", // Adjust the value to your desired size
          fontWeight: "bold",
        }}
      >
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-2">
          <div
            className="my-2 mx-2"
            style={{
              color: props.mode === "dark" ? "white" : "#042743",
              fontSize: "1rem", // Adjust the value to your desired size
              //fontWeight: "bold",
            }}
          >
            <h8 className="mb-2">{props.heading1}</h8>
          </div>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="7"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-4 mx-2">
        <h2
          className="my-2"
          style={{
            color: props.mode === "dark" ? "white" : "#042743",
            fontSize: "2rem", // Adjust the value to your desired size
            fontWeight: "bold",
          }}
        >
          Your Text Summary
        </h2>
        <div>
          <p
            className="my-2"
            style={{
              color: props.mode === "dark" ? "white" : "#042743",
              fontSize: "1rem", // Adjust the value to your desired size
            }}
          >
            {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
            words and {text.length} characters
          </p>
          <p
            className="my-2"
            style={{
              color: props.mode === "dark" ? "white" : "#042743",
              fontSize: "1rem", // Adjust the value to your desired size
            }}
          >
            {(
              0.008 *
              text.split(/\s+/).filter((element) => element.length !== 0).length
            ).toFixed(2)}{" "}
            Minutes read
          </p>
        </div>
        <h2
          className="my-2"
          style={{
            color: props.mode === "dark" ? "white" : "#042743",
            fontSize: "2rem", // Adjust the value to your desired size
            fontWeight: "bold",
          }}
        >
          Preview
        </h2>
        <div>
          <p
            className="my-2"
            style={{
              color: props.mode === "dark" ? "white" : "#042743",
              fontSize: "1rem", // Adjust the value to your desired size
            }}
          >
            {text.length > 0 ? text : "Nothing to Preview!"}
          </p>
        </div>
      </div>

      <ToastContainer
        className="bg-gray-800 text-white"
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
