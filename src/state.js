import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { STATES } from './constants';

const rootReducer = (state = [], action) => {
  switch (action.type) {
    case STATES.ADD_REMINDER: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

const store = createStore(rootReducer, composeWithDevTools());

export default store;
