import React from 'react'
import { useState } from 'react';

export const Choices = [
  ['rock','far fa-hand-rock'],
  ['paper','far fa-hand-paper'],
  ['scizzor','far fa-hand-scissors'],
];

function Userchoice(props) {

    let [userChoices, setUserChoices] = useState("");

    const clickHandler = (e)=> {
  
      if(props.userMove === "") {
        setUserChoices(()=> {
          userChoices = e.target.value;
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
              <button key = {index} className={`choice ${choiceItem[1]}`} onClick={clickHandler} value={choiceItem[0]}>     
              
              </button>
              )
            })}

            </div>
        </div>
            
        </>
    )
}

export default Userchoice
