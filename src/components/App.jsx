import React, {useState} from "react";
import Task from './task';
import TextArea from './TextArea';

function App() {
  
  const [taskArr, setTask] = useState([]);


  function addTask(input){

    setTask(function (prevTask){
      return [
        ...prevTask, input
      ]
    })    
  }

  function appendTasks(task, index){
    return (
      <Task
        key={index} 
        id={index}
        task={task}
        deletetask={deleteItem}
      />
    )
  }

  function deleteItem(id){
    //we have the index of the element to be removed from the array
    setTask((prevTaskArr) => {
      return (
        prevTaskArr.filter(function(item, index){
          //if the index matches the id, DON'T return that item
          return index !== id;
        })
    );
  });

}

  return (
    <div className="container">

      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <TextArea 
        addTask={addTask}
      />

      <div>
        <ul>
            {taskArr.map(appendTasks)}
        </ul>
      </div>

    </div>
  );
}

export default App;
