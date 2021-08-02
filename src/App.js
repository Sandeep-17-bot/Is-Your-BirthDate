import React, { useState } from "react";
import "./styles.css";
import congrates from "./congrates.gif";
import noluck from "./noluck.gif";

export default function App() {
  // const date = document.querySelector("#dats")
  // const result = document.querySelector("#result");
  const yourluckyimg = (
    <div>
      <img alt="yourlucky" src={congrates} />
    </div>
  );
  const yournotimg = (
    <div>
      <img alt="younot" src={noluck} />
    </div>
  );

  const [showresult, setresult] = useState(["", ""]);
  function checkClickHandler() {
    let inputValue = document.getElementById("dats").value;
    // console.log("click")

    var spl = inputValue.split("-").join("");
    // console.log(spl)

    var len = spl.length;
    // console.log(len)
    let sum = 0;

    for (let i = 0; i < len; i++) {
      sum += Number(spl[i]);
      // console.log(sum)
    }
    var luckyno = document.getElementById("lucky").value;

    if (sum % luckyno === 0) {
      setresult(["WoW! Your lucky", yourluckyimg]);
    } else {
      setresult([
        "Ok Ok Your Number is not lucky, but man Your Lucky",
        yournotimg
      ]);
    }
  }
  // function to close alert
  function closeHandler() {
    const close = document.getElementById("closebtn");
    close.parentElement.style.display = "none";
  }
  function scrollHandler() {
    let scroll = document.getElementById("main");
    scroll.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start"
    });
  }

  return (
    <div className="App">
      {/* top section */}
      <section id="question">
        <h1>Is your Birthday lucky ?</h1>

        <div className="scroll" onClick={scrollHandler}>
          Click Here to get into main section
        </div>
      </section>

      {/* main section */}
      <section id="main">
        {/* privacy  */}
        {/* &times; to create "x" symbol */}

        <div className="alert">
          <span id="closebtn" onClick={closeHandler}>
            &times;
          </span>
          <span class="notice">Privacy Notice!</span>We are not storing your
          data
        </div>

        <h2>Enter Your Birthdate and Lucky Number to continue...</h2>

        <div className="subheading">Select Your Birth Date:</div>
        <input id="dats" type="date"></input>

        <div className="subheading">Enter Your Lucky Number:</div>
        <input id="lucky" type="number"></input>

        <button id="check" onClick={checkClickHandler} className="check">
          check
        </button>

        <div id="result">{showresult}</div>
      </section>
    </div>
  );
}
// This is "Is your birthdate and your lucky no. matches or not"app
