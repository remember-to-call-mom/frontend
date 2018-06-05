import {
  createStore,
  applyMiddleware,
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import uuidv4 from 'uuid/v4';

import { STATES } from './constants';

const remindersReducer = (state = [], action) => {
  switch (action.type) {
    case STATES.ADD_REMINDER: {
      const payload = {
        ...action.payload,
        id: uuidv4(),
      };

      return [...state, payload];
    }

    case STATES.DELETE_REMINDER: {
      return state.filter(reminder => reminder.id !== action.payload);
    }

    default: {
      return state;
    }
  }
};

const routeReducer = (state = window.location.pathname, action) => {
  switch (action.type) {
    case STATES.UPDATE_NAVIGATION: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};

const rootReducer = (state = {}, action) => ({
  reminders: remindersReducer(state.reminders, action),
  route: routeReducer(state.route, action),
});

const middleware = store => next => (action) => {
  const result = next(action);

  if (action.type === STATES.ADD_REMINDER) {
    store.dispatch({
      type: STATES.UPDATE_NAVIGATION,
      payload: '/',
    });
  }

  return result;
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(middleware)),
);


export default store;
