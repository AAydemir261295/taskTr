// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Responsible } from '../store/responsibles/responsible.model';

// @Injectable({
//     providedIn: "root",
//   })
// export class ResponsibleService {
//   get(): Observable<Responsible[]> {
//     var items: Responsible[] = [
//       {
//         id: 1,
//         name: 'ÉDOURAD MANET',
//       },
//       {
//         id: 2,
//         name: 'CLAUDE MONET',
//       },
//       {
//         id: 3,
//         name: 'EDGAR DEGAS',
//       },
//       {
//         id: 4,
//         name: 'PIERRE-AUGUSTE RENOIR',
//       },
//       {
//         id: 5,
//         name: 'CAMILLE PISSARRO',
//       },
//     ];
//     return new Observable((obs) => {
//         // obs.complete()
//       obs.next(items);
//       obs.complete();
//     });
//   }
// }
