import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeAllTasks } from "../reducers/tasks";
import { selectTasksCount } from "../selectors";
import TaskItem from "./TaskItem";
import {
  ListContainer,
  CountContainer,
  CompleteAllButton,
} from "../styles/AppStyles";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const allTasksCount = useSelector((state) => selectTasksCount(state, "all"));
  const uncompletedTasksCount = useSelector((state) =>
    selectTasksCount(state, "uncompleted")
  );

  const handleCompleteAll = () => {
    dispatch(completeAllTasks(true));
  };

  return (
    <ListContainer>
      <CountContainer>All Tasks: {allTasksCount}</CountContainer>
      <CountContainer>
        Uncompleted Tasks: {uncompletedTasksCount}
      </CountContainer>
      <CompleteAllButton onClick={handleCompleteAll}>
        Complete All
      </CompleteAllButton>
      {tasks.length === 0 && (
        <p>No tasks available. Add a task to get started!</p>
      )}
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </ListContainer>
  );
};

export default TaskList;
