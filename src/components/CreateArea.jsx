import React, { useState } from "react";

function CreateArea(props) {
    const [item, setItem] = useState({
        title: "",
        content: ""
    })

    function handleChange(event){
        const {name, value} = event.target;
        setItem(prevValues => {
            return {
                ...prevValues,
                [name]: value
            }
        }); 
    }

    function handleClick(e){        
        props.onClick(item);
        setItem({
            title: "",
            content: ""
        })
        e.preventDefault();    
    }

  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} name="title" placeholder="Title" value={item.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={item.content} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
