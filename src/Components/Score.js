import React from 'react'

function Score(props) {
    return (
        <div className="score-container">

            <div className="scoreCard">
                <div className="userscore">
                    <h4> You: {props.userScore.current} </h4>
                </div>
                <div className="botscore">
                    <h4> Bot: {props.botScore.current} </h4>
                </div>
            </div>
            
        </div>
    )
}

export default Score
