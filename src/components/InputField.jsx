import React, { useState } from "react";

export default function InputField(props){
    const [inputValue, setInputValue] = useState("");
    function handleChange(event){
        const {value} = event.target;
        setInputValue(value);
        props.onChangeIF(event);
    }
    return (
        <input onChange={handleChange} name="title" placeholder="Title" value={inputValue} />
    )
}