import { createAction } from '@ngrx/store';

export const increment = createAction('[Home Page] Increment Step');
export const decrement = createAction('[Home Page] Decrement Step');
export const reset = createAction('[Home Page] Reset Store');

