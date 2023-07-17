import { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");

  const handleChangeName = (e) => {
    e.preventDefault();

    setName(e.target.value);
  };

  const handleAdd = () => {
    setList((prev) => [...prev, name]);
    setName("");
  };

  return (
    <div className="App">
      <h1>TODO App</h1>
      <br />
      <Form.Control value={name} onChange={handleChangeName} />
      <Button variant="primary" onClick={handleAdd}>
        Add
      </Button>

      <TodoList list={list} />
    </div>
  );
}

export default App;
