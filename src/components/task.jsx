import React from "react";

function Task(props){
    // const [clicked, setClick] = useState(false); //to check whether task is clicked or not

    function handleClick(){
        props.deletetask(props.id)
    }

   return (
        <div>
            <li onClick={handleClick}>
                {props.task}
            </li>  
        </div>
   )

}

export default Task;