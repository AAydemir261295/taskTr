// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Task } from '../store/tasks/task.model';

// @Injectable({
//     providedIn: "root",
//   })
// export class TasksService {
//   get(): Observable<Task[]> {
//     var items: Task[] = [
//       {
//         id: 1,
//         header: 'header1',
//         taskName: 'taskName1',
//         timeStamp: new Date('2023-02-10'),
//         priority: '\u{25C9} \u{25C9}',
//         responsibleIds: [1, 2],
//         status: 'await',
//       },
//       {
//         id: 2,

//         header: 'header2',
//         taskName: 'taskName2',
//         timeStamp: new Date('2023-02-11'),
//         priority: '\u{25C9}',
//         responsibleIds: [1, 2, 3],
//         status: 'in progress',
//       },
//       {
//         id: 3,

//         header: 'header3',
//         taskName: 'taskName3',
//         timeStamp: new Date('2023-02-12'),
//         priority: '\u{25C9} \u{25C9} \u{25C9}',
//         responsibleIds: [2],
//         status: 'await',
//       },
//       {
//         id: 4,

//         header: 'header4',
//         taskName: 'taskName4',
//         timeStamp: new Date('2023-02-13'),
//         priority: '\u{25C9} \u{25C9}',
//         responsibleIds: [2, 3, 4],
//         status: 'testing',
//       },
//       {
//         id: 5,
//         header: 'header5',
//         taskName: 'taskName5',
//         timeStamp: new Date('2023-02-13'),
//         priority: '\u{25C9} \u{25C9} \u{25C9} \u{25C9}',
//         responsibleIds: [1, 2, 3, 4],
//         status: 'ready',
//       },
//     ];
//     return new Observable((obs) => {
//       obs.next(items);
//     });
//   }

//   create(payload: { task: Task }): Observable<number> {
//     var id = 6;
//     return new Observable((obs) => {
//       obs.next(id);
//       id++;
//       obs.complete();
//     });
//   }

//   update(payload: { updates: Task }): Observable<boolean> {
//     return new Observable((obs) => {
//       obs.next(true);
//       obs.complete();
//     });
//   }

//   delete(payload: { ids: number[] }): Observable<boolean> {
//     return new Observable((obs) => {
//       if (true) {
//         obs.next(true);
//       } else {
//         throw new Error('err message');
//       }
//       obs.complete();
//     });
//   }
// }
