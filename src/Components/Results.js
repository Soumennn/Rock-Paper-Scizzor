

function Results({userMove, botMove, gameState}) {

    // const reloadHandler = () => {
    //     let reload = "";

    //     setTimeout(() => {
    //         getUserMove(reload);
    //         getBotMove(reload);
    //         getLoadRes(reload);
    //         getGameState(reload);
    //     },1000)

    //     setTimeout(() => {
    //         console.log(userMove);
    //         console.log(botMove);
    //     },1500)
        
        

    // }


    return (
        <>
        <div className="results-section">
            <div className="user-bot-choices">
                <li> Your move : <span>{userMove}</span>  </li>
                <li> Bots's move : <span>{botMove}</span> </li>
            </div>

            <div className="conclusion">
                <h1>{ gameState.current }</h1>
            </div>
        </div>
     
        </>
    )

}


export default Results
