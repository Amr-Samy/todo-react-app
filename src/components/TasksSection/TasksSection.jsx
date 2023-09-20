import Button from "../../reusableComponents/Button/Button";
import Card from "../../reusableComponents/Card/Card";
import "./Tasks.css";
import { useEffect, useState, Fragment } from "react";

let tasksList = [
  {
    id: "0",
    title: "Task 1",
    isDone: false,
  },
  {
    id: "1",
    title: "Task2",
    isDone: false,
  },
  {
    id: "2",
    title: "Task3",
    isDone: false,
  },
  {
    id: "3",
    title: "Task4",
    isDone: false,
  },
];


const TasksSection = (props) => {
  
  // let [count, setCount] = useState(tasksList.length);
  const [list, setList] = useState(tasksList);

  const handleDelete = (id) => {
    console.log("delete: "+ id)
    let tasks = [...list];                        //deep copy
    tasks= tasks.filter((task) => task.id !== id);//action
    setList(tasks);                               //setstate
  };

  // useEffect(() => {
  //   if (list === tasksList)
  //     return;
  //   console.log("list updated")
  // }, [list])
  
  // useEffect(() => {
  //   if (tasksList.length === count)
  //     return;
  //   console.log("item deleted")
  // },[count])

  const updateStatus = (id) => {
    // let tasks = [...list];                        //deep copy
    // tasks.id.isDone = !tasks.id.isDone;     //action
    // setList(tasks);                               //setstate
    // console.log("update : " + id +"status : "+tasks.id.isDone);
    
    let itemToBeDone = list.find((item) => item.id === id)
    console.log(itemToBeDone);
    itemToBeDone.isDone = !itemToBeDone.isDone;
    setList([...list]);
  };

  const handleAdd = () => {
    let tasks = [...list];                       //deep copy
    let taskText = document.getElementById("todoText").value;
    if (taskText !== "") {
      let newTask = {
        id: tasks.length + 1,
        title: taskText,
        isDone: false,
      }
      tasks.push(newTask);     //action
      setList(tasks);                               //setstate
      console.log("added : " + newTask + "success");
    }
  };

  return (
    <div>

    <div className="row ">
    <div id="container" className="d-flex  align-self-start ">
      <div className="align-self-center  ms-5" id="divContent">
        <h2 className=" h1 text-white">TO-DO APP!</h2>
        <h6 className="text-white mt-3">Add a new To-Do</h6>
      
       <input type="text" id="todoText" className="form-control mx-5 w-100" />
          <br></br>
          <Button className="" content='Add' type='submit' handleClick={()=>handleAdd()} />
      </div>
      </div>
      </div>

    <div id="Tasks_container" className="d-flex flex-column">
       <h4 className=" h3 mt-3 ">Let's get some work done!</h4>
      
      <div className="pt-5 w-100" id="left_div">
      {list.map(( task ,i ) => (
        <Fragment key={i}>
          <Card
            index={i}//TODO pass in props to update
            title={task.title}
            isDone={task.isDone? "text-decoration-line-through" : "" }
            buText={task.isDone ?"Undo":"Done"}
            handleDelete={()=>handleDelete(task.id)}
            handleDone = {()=>updateStatus(task.id)}
            ></Card>
        </Fragment>
          ))} 
      </div>
       
      </div>
      </div>
  );
};

export default TasksSection;