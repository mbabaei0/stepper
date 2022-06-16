import { createReducer, on } from '@ngrx/store';
import { UserForm } from '../models/form.model';
import { User } from '../models/user.model';
import { increment, decrement, reset, setImage, setForm, setUser } from './home.action';

export const homeStoreFeatureKey = 'home';


export interface IHomeState {
  activeIndex: number,
  image: File | null,
  form: UserForm | null,
  user: User | null
}
export const initialState: IHomeState = {
  activeIndex: 0,
  image: null,
  form: null,
  user: null

};

export const homeReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, activeIndex: state.activeIndex + 1 })),
  on(decrement, (state) => ({ ...state, activeIndex: state.activeIndex - 1 })),
  on(setImage, (state, { file }) => ({ ...state, image: file })),
  on(setForm, (state, { form }) => ({ ...state, form })),
  on(setUser, (state, { user }) => ({ ...state, user })),
  on(reset, (state) => initialState)
);
