import { createAction, props } from '@ngrx/store';
import { UserForm } from '../models/form.model';
import { User } from '../models/user.model';

export const increment = createAction('[Home Page] Increment Step');
export const decrement = createAction('[Home Page] Decrement Step');
export const setImage = createAction('[Home Page] Set Image',props<{file: File}>());
export const setForm = createAction('[Home Page] Set Form',props<{form: UserForm}>());
export const setUser = createAction('[Home Page] Set User',props<{user: User}>());
export const reset = createAction('[Home Page] Reset Store');

