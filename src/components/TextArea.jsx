import React, { useState } from "react";

export default function TextArea(props){
    const [inputValue, setInputValue] = useState("");
    function handleChange(event){
        const {value} = event.target;
        setInputValue(value);
        props.onChangeTA(event);
    }
    return (
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={inputValue} />
    )
}