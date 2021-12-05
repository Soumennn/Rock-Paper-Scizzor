import React from 'react'
import { useState } from 'react';

export const botArrChoice = ['rock','paper','scizzor'];

function Botchoice(props) {

    
    let [botChoices, setBotChoices] = useState("");

    const botClickHandler = ()=> {
        if(props.botMove === "") {
        setBotChoices(()=> {
          botChoices = botArrChoice[Math.floor(Math.random()* botArrChoice.length)]
        //   console.log(botChoices);
          setTimeout(()=> {
            props.getBotMove(botChoices);
          });
        })

      }
    }

    return (
        <>
             <div className="bot-choice-section">
                <h4> Bot says,' Lets see who wins ! Click below and I shall make my move: ;) ' </h4>
                <button 
                className="choice" 
                onClick={botClickHandler}  
                style={{marginTop:"1rem"}}> 
                    Bot's choice 
                </button>
            </div>
        </>
    )
}

export default Botchoice
