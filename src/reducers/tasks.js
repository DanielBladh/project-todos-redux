import { createSlice } from "@reduxjs/toolkit";

export const tasks = createSlice({
  name: "tasks",
  initialState: [
    { id: 1, text: "Watch video on actions & reducers", complete: true },
    { id: 2, text: "Follow redux codealong", complete: true },
    { id: 3, text: "Fork weekly assignment", complete: true },
    { id: 4, text: "Create a todo app", complete: false },
  ],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: state.length + 1,
        text: action.payload.text,
        complete: false,
        timestamp: new Date().toISOString(),
        dueDate: action.payload.dueDate,
      };
      state.push(newTask);
    },
    removeTask: (state, action) => {
      const taskIdToRemove = action.payload;
      return state.filter((task) => task.id !== taskIdToRemove);
    },
    toggleTask: (state, action) => {
      const taskIdToToggle = action.payload;
      return state.map((task) =>
        task.id === taskIdToToggle
          ? { ...task, complete: !task.complete }
          : task
      );
    },
    completeAllTasks: (state, action) => {
      const completeAll = action.payload;
      return state.map((task) => ({
        ...task,
        complete: completeAll ? true : false,
      }));
    },
  },
});

export const { addTask, removeTask, toggleTask, completeAllTasks } =
  tasks.actions;

export default tasks.reducer;
