import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, removeTask } from "../reducers/tasks";
import {
  TaskListItem,
  TaskCheckbox,
  TaskText,
  TaskRemoveButton,
  DueDate, 
} from "../styles/TaskStyles";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleRemove = () => {
    dispatch(removeTask(task.id));
  };

  return (
    <TaskListItem>
      <TaskCheckbox
        type="checkbox"
        checked={task.complete}
        onChange={handleToggle}
      />
      <TaskText complete={task.complete}>{task.text}</TaskText>
      {task.timestamp && (
        <span>{new Date(task.timestamp).toLocaleString()}</span>
      )}
      {task.dueDate && (
        <DueDate>Due: {new Date(task.dueDate).toLocaleDateString()}</DueDate>
      )}{" "}
      {/* Use DueDate component */}
      <TaskRemoveButton onClick={handleRemove}>Remove</TaskRemoveButton>
    </TaskListItem>
  );
};

export default TaskItem;
