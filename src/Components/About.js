import React from "react";
import { ToastContainer } from "react-toastify";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };

  return (
    <div className="container">
      <h1
        className="my-4"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
          fontSize: "2rem", // Adjust the value to your desired size
          fontWeight: "bold",
        }}
      >
        <strong>About Us</strong>
      </h1>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button bg-gray-100 hover:bg-gray-200"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Enhance Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextWizard Gives You A Way To Enhance Your Text Quickly And
              Efficiently. With Features Like Word Count, Character Count, And
              Space Removal, You Can Enhance Your Text Quickly And Efficiently.
              Whether You're A Student, Writer, Or Business Professional,
              TextWizard Is An Essential Tool To Help You Craft Your Best Work.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button bg-gray-100 hover:bg-gray-200 collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextWizard Is A Free Character Counter Tool That Provides Instant
              Character Count & Word Count Statistics For A Given Text.
              TextWizard Reports The Number Of Words And Characters, Making It
              Suitable For Writing Text With Word/ Character Limits.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button bg-gray-100 hover:bg-gray-200 collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This Word Counter Software Works In Any Web Browsers Such As
              Chrome, Firefox Internet Explorer, Safari, And Opera. It Is
              Suitable For Counting Characters In Facebook, Blog Posts, Books,
              Excel Documents, PDF Documents, Essays, And More.
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
        </div>
      </div>
    </div>
  );
}
