export const selectTasksCount = (state, filter) => {
    const tasks = state.tasks;
  
    if (filter === 'all') {
      return tasks.length;
    } else if (filter === 'uncompleted') {
      return tasks.filter((task) => !task.complete).length;
    }
  
    return 0;
  };
  