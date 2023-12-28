import React from "react";

export default function Navbar({setCategory}){
    return(
        <div className="navcontainer">
            <nav>
                <div>
                    <ul className="nav">
                        <li onClick={() => setCategory("science")}>Science</li>
                        <li onClick={() => setCategory("technology")}>Tech</li>
                        <li onClick={() => setCategory("business")}>Business</li>
                        <li onClick={() => setCategory("health")}>Health</li>
                        <li onClick={() => setCategory("sports")}>Sports</li>
                        <li onClick={() => setCategory("entertainment")}>Entertainment</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}