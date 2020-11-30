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

      <div id="jsDiv" class="div">
        <h1 class="title">Javascript</h1>
        <p class="description">
        JavaScript is a programming language commonly used in web development. 
        It was originally developed by Netscape as a means to add dynamic and 
        interactive elements to websites. While JavaScript is influenced by 
        Java, the syntax is more similar to C and is based on ECMAScript, 
        a scripting language developed by Sun Microsystems.
        </p>
      </div>
      <div id="reactDiv" class="div">
        <h1 class="title">React</h1>
        <p class="description">
        React is an open-source, front end, JavaScript library for building 
        user interfaces or UI components. It is maintained by Facebook and 
        a community of individual developers and companies. React can be 
        used as a base in the development of single-page or mobile applications.
        </p>
      </div>
      <div id="rubyDiv" class="div">
        <h1 class="title">Ruby on Rails</h1>
        <p class="description">
        Ruby on Rails, or Rails, is a server-side web application framework 
        written in Ruby under the MIT License. Rails is a model–view–controller 
        framework, providing default structures for a database, a web service, 
        and web pages.
        </p>
      </div>
      <div id="htmlDiv" class="div">
        <h1 class="title">HTML</h1>
        <p class="description">
        Hypertext Markup Language, a standardized system for tagging text files 
        to achieve font, color, graphic, and hyperlink effects on World Wide Web 
        pages.
        </p>
      </div>
      <div id="cssDiv" class="div">
        <h1 class="title">CSS</h1>
        <p class="description">
        Cascading Style Sheets is a style sheet language used for describing the 
        presentation of a document written in a markup language such as HTML. 
        CSS is a cornerstone technology of the World Wide Web, alongside HTML 
        and JavaScript.
        </p>
      </div>
      <div id="cDiv" class="div">
        <h1 class="title">C#</h1>
        <p class="description">
        C# is a general-purpose, multi-paradigm programming language encompassing 
        static typing, strong typing, lexically scoped, imperative, declarative, 
        functional, generic, object-oriented, and component-oriented programming 
        disciplines.
        </p>
      </div>
      <div id="c2Div" class="div">
        <h1 class="title">C++</h1>
        <p class="description">
        
        </p>
      </div>
      <div id="javaDiv" class="div">
        <h1 class="title">Java</h1>
        <p class="description">
        Java is a high-level programming language developed by Sun Microsystems. 
        It was originally designed for developing programs for set-top boxes and 
        handheld devices, but later became a popular choice for creating web 
        applications. The Java syntax is similar to C++, but is strictly an 
        object-oriented programming language.
        </p>
      </div>
    </div>
  );
};
export default Category;
