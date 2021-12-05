import { useEffect, useRef, useState } from 'react';
import './App.css';
import './App.css'
import Botchoice from './Components/Botchoice';
import Decision from './Components/Decision';
import Navbar from './Components/Navbar';
import Results from './Components/Results';
import Rules from './Components/Rules';
import Userchoice from './Components/Userchoice';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Route, Switch as Routes } from 'react-router';
import game from './check'
import Score from './Components/Score';

function App() {



  let [userMove,setUserMove] = useState(()=> "");
  let [botMove,setBotMove] = useState(()=> "");
  let [loadRes, setLoadRes] = useState("");
  let gameState = useRef(null);
  let userScore = useRef(0);
  let botScore = useRef(0);


  // console.log('Render \n -----------------');
  // console.log(userMove);
  // console.log("-----------");

  const reloadHandler = () => {

      setUserMove("");
      setBotMove("");
      setLoadRes("");
      gameState.current = null;

      // setTimeout(() => {
      //   console.log(userMove);
      //   console.log(botMove);
      // })
  }

  useEffect(() => {
    setTimeout(() => {
      if(userMove !== undefined) {
      let res = game(userMove.trim(),botMove.trim());
      // console.log(res)
      gameState.current = res;
      // console.log(gameState.current);
      }
      
    }, 1000);
  },[userMove,botMove])


  if(gameState.current === "OOPS! BOT WINS") {
    
      botScore.current += 1;
    
  }
  else if(gameState.current === "HURRAY , YOU WIN !") {

      userScore.current += 1;
    
  }

  const getGameState = (val)=> {

    gameState.current = val;

  }


  const getUserMove = (move) => {

    setUserMove(()=> userMove = move);
    console.log("App comp: usermove --> " + userMove);

  }

  const getBotMove = (move) => {

    setBotMove(()=> botMove = move);
    console.log("App comp: botmove --> " + botMove);

  }

  const getLoadRes = (value) => {

      setLoadRes(()=> loadRes = value )
      console.log("updated state: " + loadRes);

  }

  
  return (
    <Router>
      <Routes>
      <div className="App">
        <Route exact path="/">
          <Navbar gameState={gameState} />
          <Userchoice getUserMove={getUserMove} userMove={userMove}/>
          <Botchoice getBotMove={getBotMove} botMove={botMove}/>
          <Decision getLoadRes={getLoadRes} botMove={botMove} />

          {loadRes === "show" ? (
            <Results 
              userMove={userMove} 
              botMove={botMove} 
              gameState={gameState} 
              getUserMove={getUserMove}
              getBotMove={getBotMove}
              getLoadRes={getLoadRes}
              getGameState={getGameState}
            />
          ): null
          }
          {loadRes === "show" ? (
            <div className="reload">
            <Link onClick={reloadHandler} to="/"> Play Again ? </Link>
            </div>
          ): null
          }
        </Route>
        <Route exact path="/rules">
          <Navbar/>
          <Rules/>
        </Route>
        <Route exact path="/scores">
          <Navbar/>
          <Score userScore={userScore} botScore={botScore}/>
        </Route>


      </div>
      </Routes>
    </Router>
  );
}

export default App;
