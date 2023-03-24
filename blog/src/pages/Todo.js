import { useState } from "react";
import styled from "styled-components";
import "./stylesfortodo.css"
//import "./index.css";
const Container = styled.div`
width: 60%;
margin: auto;
`;
const Button = styled.button`
  display:inline-block;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height: 30px;
  width: 50px;
  border-radius: 2px;
  cursor: pointer;
`;
const Text = styled.input`
  border: 2px solid #000;
  width: 200px;
  padding: 5px;
  border-radius: 2px;
  margin: 5px;
`;

const LIST = styled.li`
    listStyle:"none";
    text-decoration: "line-through";
`;
const Todo = () => {
  const [input, setInput] = useState("");
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const handleClick = () => {
    const id = todoList.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        complete: false,
      }
    ]);
    setInput("");
  };
  const handleComplete = (id) => {
    let list = todoList.map((task) => {
      let item = {};
      if (task.id == id) {
        if (!task.complete) {

          setCompletedTaskCount(completedTaskCount + 1);
        }
        else {

          setCompletedTaskCount(completedTaskCount - 1);
        }
        item = { ...task, complete: !task.complete };
      } else item = { ...task };
      return item;
    });
    setTodoList(list);
  };
  return (
    

      <div className="gridcontainer1">

      <div className="griditem1">
        <h2 className="heading">Check out your pending tasks </h2>

        <div className="contents">
        Pending Tasks :{todoList.length - completedTaskCount}
      </div>
      <div className="contents">
        Completed Tasks : {completedTaskCount}
      </div>

      </div>

      
      <div className="griditem1">

        <div className="grid2">
      <input className="input" value={input} onInput={(e) => setInput(e.target.value)} />
      <Button onClick={() => handleClick()}>Add</Button>
      </div>
      <div>
        <ul>
          {todoList.map((todo) => {
            return (
              <LIST
                complete={todo.complete}
                id={todo.id}
                onClick={() => handleComplete(todo.id)}
                style={{
                  listStyle: "none",
                  textDecoration: todo.complete && "line-through",
                }}
              >
                {todo.task}
                <input type="checkbox"></input>
              </LIST>
            );
          })}
        </ul>
      </div>
      </div>

    </div>
  );
};
export default Todo;