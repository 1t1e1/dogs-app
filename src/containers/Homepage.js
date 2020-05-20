import React from "react";
import dogsData from "../dogsdata";

export default function Homepage() {
    return (
        <div>
            <h1>this is home page</h1>
            <ul>
                {dogsData.map((dog) => (
                    <li key={dog.id}>{dog.name}</li>
                ))}
            </ul>
        </div>
    );
}
