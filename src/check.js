import { Choices } from './Components/Userchoice'
// ["ROCK","PAPER","SCIZZOR"]
    

    const game = (userMove, botMove) =>
    {

        if (userMove === botMove)
            return ("draw");

        if (userMove === Choices[0] && botMove === Choices[1])
            return ("bot wins");
 
        else if (userMove === Choices[1] && botMove === Choices[0]) 
            return ("you win");

        if (userMove === Choices[0] && botMove === Choices[2])
            return ("you win");

        else if (userMove === Choices[2] && botMove === Choices[0])
            return ("bot wins");

        if (userMove === Choices[1] && botMove === Choices[2])
            return ("bot wins");

        else if (userMove === Choices[2] && botMove === Choices[1])
            return ("you win");
    }


    export default game;