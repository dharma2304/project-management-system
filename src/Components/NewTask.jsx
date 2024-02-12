import React from "react";
import { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleInputTask(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask === "") {
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleInputTask}
        value={enteredTask}
      />
      <button
        className="text-stone-900 hover:bg-stone-400 rounded-lg px-2 py-1"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
