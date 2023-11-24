import React from "react";
import { useSelector } from "react-redux";
import { selectTasksCount } from "../selectors";
import TaskItem from "./TaskItem";
import { ListContainer, CountContainer } from "../styles/AppStyles";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const allTasksCount = useSelector((state) => selectTasksCount(state, "all"));
  const uncompletedTasksCount = useSelector((state) =>
    selectTasksCount(state, "uncompleted")
  );

  return (
    <ListContainer>
      <CountContainer>All Tasks: {allTasksCount}</CountContainer>
      <CountContainer>
        Uncompleted Tasks: {uncompletedTasksCount}
      </CountContainer>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </ListContainer>
  );
};

export default TaskList;
