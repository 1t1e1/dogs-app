import React from "react";

import dogsData from "../dogsdata";

export default function Goldens() {
    const goldens = dogsData.filter((dog) => dog.breed === "Golden Retriever");
    return (
        <div>
            <h1>tur Golden sayfasi</h1>
            <ul>
                {goldens.map((dog) => (
                    <li key={dog.id}>{dog.name}</li>
                ))}
            </ul>
        </div>
    );
}
