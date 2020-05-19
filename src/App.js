import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import Header from "./Header";
import dogsData from "./dogsdata";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <ul>
                {dogsData.map((dog) => (
                    <li>
                        <Button>{dog.name}</Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
