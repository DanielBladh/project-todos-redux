import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../reducers/tasks";
import { FormContainer } from "../styles/AppStyles";

const TaskForm = () => {
  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      dispatch(addTask({ text: newTask, dueDate: dueDate || null }));
      setNewTask("");
      setDueDate("");
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Task"
        />
        <input type="date" value={dueDate} onChange={handleDueDateChange} />
        <button type="submit">Add Task</button>
      </form>
    </FormContainer>
  );
};

export default TaskForm;
