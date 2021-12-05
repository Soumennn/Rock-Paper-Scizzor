import { useEffect, useState } from "react";


function Decision(props) {

    let [on,setOn] = useState(false);

    
    useEffect(()=> {
    })


    const loadingHandler = () => {

        setOn(() => {
            on = !on;

            setTimeout(() => {
                let onButton = "show";
                props.getLoadRes(onButton);
            })

        })
    }

    


    return (
        <>
            <div className="decision-section">
            <h4>  Exited ? Click here to view the results : </h4>

            <button 
            onClick={loadingHandler}> 
            Results
            </button>

            </div>

        </>
    )
}

export default Decision
