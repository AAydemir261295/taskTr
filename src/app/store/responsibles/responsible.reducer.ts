// import { createReducer, on } from '@ngrx/store';
// import { act } from '@ngrx/effects';
// import { ResponsiblesState } from './responsible.model';
// import { ResponsibleActions } from './responsible.actions';

// export const initialResponsiblesState: ResponsiblesState = {
//   responsibles: [],
//   isPending: true,
//   isLoaded: false,
//   errMsg: '',
// };

// const responsiblesReducer = createReducer(
//   initialResponsiblesState,
//   on(ResponsibleActions.retrieveResponsibles, (state, action) => ({
//     ...state,
//     isPending: true,
//     isLoaded: false,
//   })),
//   on(ResponsibleActions.retrieveResponsiblesSucces, (state, action) => ({
//     ...state,
//     responsibles: action.data,
//     isPending: false,
//     isLoaded: true,
//   })),
//   on(ResponsibleActions.retrieveResponsiblesError, (state, action) => ({
//     ...state,
//     isPending: false,
//     isLoaded: false,
//     errMsg: action.message,
//   }))
// );

// export function ResponsiblesReducer(state, action) {
//   return responsiblesReducer(state, action);
// }
