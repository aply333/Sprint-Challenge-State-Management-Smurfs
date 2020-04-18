import React, { useState } from "react";

const SmurfBuilder = props => {
    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");

    const [newSmurf, setNewSmurf] = useState({});

    const NameHandler = e => {
        setName(e.target.value);
        // console.log(name)
    }
    const HeightHandler = e => {
        setHeight(e.target.value);
        // console.log(height);
    }

    const AgeHandler = e => {
        setAge(e.target.value);
        // console.log(age);
    }

    const onsubmitHandler = e =>{
        e.preventDefault();
        setNewSmurf({
            name: name,
            age: age,
            height: height,
            id: (Math.random() * Math.random()).toString(9).substr(2, 9)
        })
        // console.log(newSmurf)
    }

    return(
        <div>
            <form onSubmit= {onsubmitHandler}>
                <input onChange = { NameHandler } type="text" placeholder="Smurf's Name" />
                <input onChange = { HeightHandler } type="range" min="1" max="7"/>
                <input onChange = { AgeHandler }type="range" min="1" max="250"/>
                <button>New Smurfriend</button>
            </form>

        </div>
    )
}

export default SmurfBuilder;