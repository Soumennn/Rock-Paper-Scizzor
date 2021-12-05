

function Results({userMove, botMove, gameState}) {

    //   let [gameState,setGameState] = useState("");

    //   useEffect(() => {
    //       setTimeout(() => {

    //         let res = game(userMove, botMove);
    //         console.log(res);

    //       }, 2000);
    //   })


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

        <div className="reload">
        <a href="/"> Play Again ? </a>
        </div>
        
        </>
    )

}


export default Results
