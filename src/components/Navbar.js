import react from "react";
import reactIconSmall from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <nav>
            <img src={reactIconSmall} />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}