import * as types from './types';

const initialState = { isLoading: false };

const loaderReducer: types.Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setIsLoading':
      return { isLoading: action.payload };

    default:
      return state;
  }
};

export default loaderReducer;