import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <h3> ROCK PAPER SCISSORS </h3>
                <ul className="grid-container">
                    <li className="navitems"> 
                        <Link to='/scores' style={{textDecoration:'none'}}>  Scores </Link>
                    </li> 
                    <li className="navitems">
                        <Link to='/'>  Home </Link>
                    </li> 
                    <li className="navitems"> 
                        <Link to='/rules'>  Rules </Link>
                    </li> 
                </ul>
            </div>
        </>
    )
}

export default Navbar
