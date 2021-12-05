import { useState } from "react";


function Decision(props) {

    let [on,setOn] = useState(false);

    // useEffect(() => {

    // },[props.gameState.current])

   
    const loadingHandler = () => {

        
            if(props.botMove !== "") {

            setOn(() => {
                on = !on;

                setTimeout(() => {
                    let onButton = "show";
                    props.getLoadRes(onButton);
                })

            })

        }
        
        
    }

    


    return (
        <>
            <div className="decision-section">
            <h4>  Exited ? Click here to view the results : </h4>

            <button 
            onClick={ loadingHandler }> 
            Results
            </button>

            </div>

        </>
    )
}

export default Decision
