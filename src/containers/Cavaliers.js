import React from "react";
import dogsData from "../dogsdata";

export default function Cavaliers() {
    const Cavaliers = dogsData.filter(
        (dog) => dog.breed === "Cavalier King Charles Spaniel",
    );
    return (
        <div>
            <h1>tur Cavaliers sayfasi</h1>
            <ul>
                {Cavaliers.map((dog) => (
                    <li key={dog.id}>{dog.name}</li>
                ))}
            </ul>
        </div>
    );
}
