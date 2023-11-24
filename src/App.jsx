import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tasks } from "./reducers/tasks";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { AppContainer } from './styles/AppStyles';

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <h1>ToDo App</h1>
        <TaskForm />
        <TaskList />
      </AppContainer>
    </Provider>
  );
};
