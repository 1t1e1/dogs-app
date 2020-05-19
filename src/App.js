import React from "react";
import "./App.css";
import dogsData from "./dogsdata";

function App() {
    return (
        <div className="App">
            <ul>
                {dogsData.map((dog) => (
                    <li>{dog.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
