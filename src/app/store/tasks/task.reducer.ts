// import { createReducer, on } from '@ngrx/store';
// import { Task, TasksState } from './task.model';
// import { TasksActions } from './task.actions';
// import { act } from '@ngrx/effects';

// export const initialTasksState: TasksState = {
//   tasks: [],
//   isPending: true,
//   isLoaded: false,
//   errorMsg: '',
// };

// function notInArray(arr: number[]) {
//   return function (value: Task) {
//     return arr.find((id) => id == value.id) == undefined;
//   };
// }

// const tasksReducer = createReducer(
//     initialTasksState,
//   on(TasksActions.retrieveTasks, (state, action) => ({
//     ...state,
//     isPending: true,
//     isLoaded: false,
//   })),
//   on(TasksActions.retrieveTasksSucces, (state, action) => ({
//     ...state,
//     tasks: action.data,
//     isPending: false,
//     isLoaded: true,
//   })),
//   on(TasksActions.retrieveTasksError, (state, action) => ({
//     ...state,
//     isPending: false,
//     isLoaded: false,
//     errorMsg: action.message,
//   })),
//   //
//   //
//   //
//   on(TasksActions.createTask, (state, action) => ({
//     ...state,
//     isPending: true,
//   })),
//   on(TasksActions.createTaskSucces, (state, action) => ({
//     ...state,
//     tasks: [...state.tasks, action.data],
//     isPending: false,
//   })),
//   on(TasksActions.createTaskError, (state, action) => ({
//     ...state,
//     isPending: false,
//     errorMsg: action.message,
//   })),
//   //
//   //
//   //
//   on(TasksActions.updateTask, (state, action) => ({
//     ...state,
//     isPending: true,
//   })),
//   on(TasksActions.updateTaskSucces, (state, action) => ({
//     ...state,
//     tasks: state.tasks.map((task) =>
//       task.id == action.data.id ? action.data : task
//     ),
//     isPending: false,
//   })),
//   on(TasksActions.updateTaskError, (state, action) => ({
//     ...state,
//     isPending: false,
//     errorMsg: action.message,
//   })),
//   //
//   //
//   //
//   on(TasksActions.deleteTask, (state, action) => ({
//     ...state,
//     isPending: true,
//   })),
//   on(TasksActions.deleteTaskSucces, (state, action) => ({
//     ...state,
//     tasks: state.tasks.filter(notInArray(action.ids)),
//     isPending: false,
//   })),
//   on(TasksActions.deleteTaskError, (state, action) => ({
//     ...state,
//     isPending: false,
//     errorMsg: action.message,
//   }))
// );

// export function TasksReducer(state, action) {
//   return tasksReducer(state, action);
// }
