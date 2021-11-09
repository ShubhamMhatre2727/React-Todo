import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import "./App.css";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase_config";
import TodoListItem from "./Todo";

function App() {
  const [todos, settodos] = useState([]);
  const [todoInput, settodoInput] = useState("");

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    await onSnapshot(collection(db, "todos"), (QuerySnapshot) => {
      const docs = [];
      QuerySnapshot.forEach((doc) =>{
        docs.push({id: doc.id, todo: doc.data().todo, inprogress: doc.data().isinprogress})
      });
      settodos(docs);
    });
  };

  const addTodo = () => {
    // console.log("clicked")
    addDoc(collection(db, "todos"), {
      isinprogress: false,
      todo: todoInput,
    });
    // console.log(docRef.id)
    settodoInput("");
  };

  return (
    <div className="App">
      <h1>ToDos-List</h1>
      <div className="content">
        <TextField
          className="text"
          id="standard-basic"
          label="Write a todo"
          value={todoInput}
          onChange={(e) => settodoInput(e.target.value)}
          variant="standard"
        />
        <Button variant="outlined" onClick={addTodo}>
          Add
        </Button>

        {todos.map((todo) => (
          <TodoListItem todo={todo.todo} inprogress={todo.inprogress} id={todo.id}/>
        ))}
      </div>
    </div>
  );
}

export default App;
