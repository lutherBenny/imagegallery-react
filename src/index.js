import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"; // Import the CSS file

import one from "./assets/images/dog1.jpg";
import two from "./assets/images/dog2.jpg";
import three from "./assets/images/dog3.jpg";
import four from "./assets/images/dog4.jpg";
import five from "./assets/images/dog5.jpg";
import six from "./assets/images/dog6.jpg";
import seven from "./assets/images/dog7.jpg";
import eight from "./assets/images/dog8.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Dog(props) {
    return (
        <div className="card">
            <img style={{width:"200px", height:"250px"}} src={props.image} alt="dog" />
            <p>{props.description}</p>
        </div>
    );
}

// Create a list of dogs
const dogList = [
    {
        image: one,
        description: "Deep Sleeping"
    },
    {
        image: two,
        description: "Looking"
    },
    {
        image: three,
        description: "Big Eye"
    },
    {
        image: four,
        description: "Sleeping"
    },
    {
        image: five,
        description: "Wake Up See Sunlight"
    },
    {
        image: six,
        description: "Hands Shake"
    },
    {
        image: seven,
        description: "Travelling"
    },
    {
        image: eight,
        description: "Running"
    }
];

// Render the dog list
root.render(
    <div className="container">
        {dogList.map((dog, index) => (
            <Dog key={index} image={dog.image} description={dog.description} />
        ))}
    </div>
);
