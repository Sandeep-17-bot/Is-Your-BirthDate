import React, { useState } from "react";
import "./styles.css";
import congrates from "./congrates.gif";
import noluck from "./noluck.gif";

export default function App() {
  
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


 function submitHandler(e){
  e.preventDefault()
 
 let inputValue = document.getElementById("dats").value;
    
 
     var spl = inputValue.split("-").join("");
     
 
     var len = spl.length;
     
     let sum = 0;
 
     for (let i = 0; i < len; i++) {
       sum += Number(spl[i]);
       
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

        
        <form id="form" onSubmit={submitHandler}>
        <input id="dats" type="date" required></input>

        <div className="subheading">Enter Your Lucky Number:</div>
        <input id="lucky" type="number" required></input>

        < input type="submit" value="Check" className="check" id="check" />
        <div id="result">{showresult}</div>
</form>
      </section>
    </div>
  );
}
