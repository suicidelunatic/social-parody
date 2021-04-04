import * as types from './types';

const initialState = { isLogged: false, user: {}, isInitialized: false };

const authReducer: types.Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setUser':
      return {
        isLogged: !!action.payload,
        user: action.payload || {},
        isInitialized: true,
      };

    default:
      return state;
  }
};

export default authReducer;