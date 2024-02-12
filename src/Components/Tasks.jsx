import React from "react";
import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  function handleClear(taskId) {
    onDeleteTask(taskId);
  }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />

      {tasks.length > 0 ? (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4 ">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:bg-red-500 rounded-md px-2 py-1"
                onClick={() => handleClear(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="my-4 text-stone-800">
          This project doesnot have any tasks yet
        </p>
      )}
    </section>
  );
}
