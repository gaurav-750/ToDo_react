import React, {useState} from 'react';


function Input(props){

    const [input, setInput] = useState("");

    function handleChange(e){
        const value = e.target.value;
        setInput(value);
    }
    

    return (
        <form className="form" onSubmit={(e) => {
                props.addTask(input);
                
                setInput(""); //clear the input field
                e.preventDefault();
            }}>

            <input type="text" value={input} onChange={handleChange} />
            <button>
                <span>Add</span>
            </button>
        </form>
    )

}

export default Input;