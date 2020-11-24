import React from "react";
import Python from "./Python";

const Category = ({ onSubmit }) => {
  const onClick = () => {
    onSubmit("python");
  };
  return (
    <div id="mainCatDiv">
      <div id="pythonDiv" onClick={onClick}>
        <Python />
        <h1>Python</h1>
        <p>
          Python is an interpreted, object-oriented, high-level programming
          language with dynamic semantics.Python's simple, easy to learn syntax
          emphasizes readability and therefore reduces the cost of program
          maintenance.
        </p>
      </div>

      <div id="jsDiv">
        <h1>Javascript</h1>
      </div>
      <div id="reactDiv">
        <h1>React</h1>
      </div>
      <div id="rubyDiv">
        <h1>Ruby</h1>
      </div>
      <div id="htmlDiv">
        <h1>HTML</h1>
      </div>
      <div id="cssDiv">
        <h1>CSS</h1>
      </div>
      <div id="cDiv">
        <h1>C#</h1>
      </div>
      <div id="c2Div">
        <h1>C++</h1>
      </div>
      <div id="javaDiv">
        <h1>Java</h1>
      </div>
    </div>
  );
};
export default Category;
