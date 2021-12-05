import { useEffect, useRef, useState } from 'react';
import './App.css';
import './App.css'
import Botchoice from './Components/Botchoice';
import Decision from './Components/Decision';
import Navbar from './Components/Navbar';
import Results from './Components/Results';
import Userchoice from './Components/Userchoice';
import game from './check'

function App() {

  let [userMove,setUserMove] = useState("");
  let [botMove,setBotMove] = useState("");
  let [loadRes, setLoadRes] = useState("");
  let gameState = useRef(null);


  useEffect(() => {
    setTimeout(() => {
  
      let res = game(userMove.trim(),botMove.trim());
      // console.log(res)
      gameState.current = res;
      // console.log(gameState.current);
      
    }, 1000);
  },[userMove,botMove])


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
    <div className="App">
      
      <Navbar/>
      <Userchoice getUserMove={getUserMove} />
      <Botchoice getBotMove={getBotMove} />
      <Decision getLoadRes={getLoadRes} botMove={botMove} />

      {loadRes === "show" ? (
        <Results 
          userMove={userMove} 
          botMove={botMove} 
          gameState={gameState} 
        />
      ): null
      }



    </div>
  );
}

export default App;
