// import { createActionGroup, emptyProps, props } from '@ngrx/store';
// import { Task } from './task.model';

// export const TasksActions = createActionGroup({
//   source: 'Tasks',
//   events: {
//     'Retrieve Tasks': emptyProps(),
//     'Retrieve Tasks Succes': props<{ data: Task[] }>(),
//     'Retrieve Tasks Error': props<{ message: string }>(),

//     'Create Task': props<{ payload: { task: Task } }>(),
//     'Create Task Succes': props<{ data: Task }>(),
//     'Create Task Error': props<{ message: string }>(),

//     'Update Task': props<{ payload: { updates: Task } }>(),
//     'Update Task Succes': props<{ data: Task }>(),
//     'Update Task Error': props<{ message: string }>(),

//     'Delete Task': props<{ payload: { ids: number[] } }>(),
//     'Delete Task Succes': props<{ ids: number[] }>(),
//     'Delete Task Error': props<{ message: string }>(),
//   },
// });
