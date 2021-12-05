import { botArrChoice } from './Components/Botchoice'
// ["ROCK","PAPER","SCIZZOR"]
    

    const game = (userMove, botMove) =>
    {

        if (userMove === botMove)
            return ("WHOA ! ITS A DRAW");

        if (userMove === botArrChoice[0] && botMove === botArrChoice[1])
            return ("OOPS! BOT WINS");
 
        else if (userMove === botArrChoice[1] && botMove === botArrChoice[0]) 
            return ("HURRAY , YOU WIN !");

        if (userMove === botArrChoice[0] && botMove === botArrChoice[2])
            return ("HURRAY , YOU WIN !");

        else if (userMove === botArrChoice[2] && botMove === botArrChoice[0])
            return ("OOPS! BOT WINS");

        if (userMove === botArrChoice[1] && botMove === botArrChoice[2])
            return ("OOPS! BOT WINS");

        else if (userMove === botArrChoice[2] && botMove === botArrChoice[1])
            return ("HURRAY , YOU WIN !");
    }


    export default game;