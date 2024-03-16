// import { Injectable } from '@angular/core';
// // import { Actions, act, createEffect, ofType } from '@ngrx/effects';
// import { catchError, exhaustMap, map, of } from 'rxjs';
// // import { ResponsibleService } from 'src/app/communication/responsibles.service';
// import { ResponsibleActions } from './responsible.actions';
// import { Responsible } from './responsible.model';

// @Injectable()
// export class ResponsiblesEffects {
//   // retrieveTasks$ = createEffect((): any => {
//   //   return this.actions$.pipe(
//   //     ofType(ResponsibleActions.retrieveResponsibles),
//   //     exhaustMap(() =>
//   //       this.service.get().pipe(
//   //         map((data: Responsible[]) =>
//   //           ResponsibleActions.retrieveResponsiblesSucces({ data: data })
//   //         ),
//   //         catchError((err) =>
//   //           of(ResponsibleActions.retrieveResponsiblesError({ message: err }))
//   //         )
//   //       )
//   //     )
//   //   );
//   // });

//   // constructor(private actions$: Actions,
//     //  private service: ResponsibleService
//     //  ) {}
// }
