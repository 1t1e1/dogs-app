import React from "react";
import dogsData from "../dogsdata";

export default function DogList(props) {
    const yazilanTur = props.match.params.yazilanTur;

    let turUrlFriendly;
    if (yazilanTur === "golden-retriever") {
        turUrlFriendly = "Golden Retriever";
    } else if (yazilanTur === "cavalier-king-charles-spaniel") {
        turUrlFriendly = "Cavalier King Charles Spaniel";
    } else {
        turUrlFriendly = "";
    }

    const filteredData = dogsData.filter((dog) => dog.breed === turUrlFriendly);
    console.log(props);
    return turUrlFriendly ? (
        <ul>
            {filteredData.map((dog) => (
                <li key={dog.id}>{dog.name} </li>
            ))}
        </ul>
    ) : (
        <div>
            <h1> Url may be wrong. Careful! </h1>
            <p>
                {" "}
                url is <i>{yazilanTur}</i>
            </p>
        </div>
    );
}
