import { useState } from "react";

export default function App() {
  const [task, setTask] = useState(["Drink", "Eat"]);
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const addHandler = () => {
    if (!input) return;
    if (editMode) {
      setTask((prev) =>
        prev.map((item, index) => (index === editIndex ? input : item))
      );
      setEditMode(false);
      setEditIndex(null);
      setInput("");
    } else {
      setTask((prev) => [...prev, input]);
      setInput("");
    }
  };
  const edithandler = (index, item) => {
    setEditMode(true);
    setInput(item);
    setEditIndex(index);
  };
  return (
    <div>
      <input
        placeholder="Enter task Here..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={addHandler}>Add Task</button>
      <ul>
        {task.map((task, index) => (
          <li key={index}>
            {task}
            <button
              onClick={() =>
                setTask((prev) => prev.filter((_, ind) => ind !== index))
              }
            >
              Delete
            </button>
            <button onClick={() => edithandler(index, task)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
