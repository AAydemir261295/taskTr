// import { Injectable } from '@angular/core';
// // import { Actions, act, createEffect, ofType } from '@ngrx/effects';
// import { catchError, exhaustMap, map, of } from 'rxjs';
// import { TasksActions } from './task.actions';
// // import { TasksService } from '../../communication/tasks.service';
// import { Task } from './task.model';

// @Injectable()
// export class TasksEffects {
//   // retrieveTasks$ = createEffect((): any => {
//   //   return this.actions$.pipe(
//   //     ofType(TasksActions.retrieveTasks),
//   //     exhaustMap(() =>
//   //       this.service.get().pipe(
//   //         map((data: Task[]) =>
//   //           TasksActions.retrieveTasksSucces({ data: data })
//   //         ),
//   //         catchError((err) =>
//   //           of(TasksActions.retrieveTasksError({ message: err }))
//   //         )
//   //       )
//   //     )
//   //   );
//   // });

//   // createTask$ = createEffect((): any => {
//   //   return this.actions$.pipe(
//   //     ofType(TasksActions.createTask),
//   //     exhaustMap((action) =>
//   //       this.service.create(action.payload).pipe(
//   //         map((data: number) =>
//   //           TasksActions.createTaskSucces({
//   //             data: { ...action.payload.task, id: data },
//   //           })
//   //         ),
//   //         catchError((err) =>
//   //           of(TasksActions.createTaskError({ message: err }))
//   //         )
//   //       )
//   //     )
//   //   );
//   // });

//   // updateTask$ = createEffect((): any => {
//   //   return this.actions$.pipe(
//   //     ofType(TasksActions.updateTask),
//   //     exhaustMap((action) =>
//   //       this.service.update(action.payload).pipe(
//   //         map(() =>
//   //           TasksActions.updateTaskSucces({
//   //             data: action.payload.updates,
//   //           })
//   //         ),
//   //         catchError(() =>
//   //           of(TasksActions.updateTaskError({ message: 'error' }))
//   //         )
//   //       )
//   //     )
//   //   );
//   // });

//   // deleteTask$ = createEffect((): any => {
//   //   return this.actions$.pipe(
//   //     ofType(TasksActions.deleteTask),
//   //     exhaustMap((action) =>
//   //       this.service.delete(action.payload).pipe(
//   //         map(() =>
//   //           TasksActions.deleteTaskSucces({
//   //             ids: action.payload.ids,
//   //           })
//   //         ),
//   //         catchError((err) =>
//   //           of(TasksActions.deleteTaskError({ message: err }))
//   //         )
//   //       )
//   //     )
//   //   );
//   // });

//   // constructor(private actions$: Actions, 
//     // private service: TasksService
//     // ) {}
// }
