import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './home.action';

export const homeStoreFeatureKey = 'home';


export interface IHomeState {
  activeIndex:number,
  data: any
}
export const initialState: IHomeState = {
  activeIndex:0,
  data: null
};

export const homeReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, activeIndex: state.activeIndex + 1 })),
  on(decrement, (state) =>  ({ ...state, activeIndex: state.activeIndex - 1 })),
  on(reset, (state) => initialState)
);
