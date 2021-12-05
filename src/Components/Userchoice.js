import React from 'react'
import { useState } from 'react';

export const Choices = ['rock','paper','scizzor'];

function Userchoice(props) {

    let [userChoices, setUserChoices] = useState("");

    const clickHandler = (e)=> {
        if(userChoices === "") {
        setUserChoices(()=> {
          userChoices = e.target.textContent;
          props.getUserMove(userChoices);
        })
      }
    }

    return (
        <>

        <div className="user-choice-section">
            <h4> Your choice: Choose anyone amongst the three options to play your move ! </h4>

            <div className="buttons-section">
            {Choices.map((choiceItem, index)=> {
              return (
              <button key = {index} className="choice" onClick={clickHandler} id="rock"> {choiceItem} </button>
              )
            })}

            </div>
        </div>
            
        </>
    )
}

export default Userchoice
