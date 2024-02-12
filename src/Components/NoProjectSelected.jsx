import React from "react";
import noProjects from "../assets/no-projects.png";
import ButtonUtil from "./ButtonUtil.jsx";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjects}
        alt="An Empty Projects List"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get Started with new one
      </p>
      <p className="mt-8">
        <ButtonUtil onClick={onStartAddProject}>Create New Project</ButtonUtil>
      </p>
    </div>
  );
}
