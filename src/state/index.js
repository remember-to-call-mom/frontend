import {
  createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import uuidv4 from 'uuid/v4';
import { STATES } from '../constants';
import navigationMiddleware from './navigationMiddleware';
import storageMiddleware from './storageMiddleware';

const remindersReducer = (state = [], action) => {
  switch (action.type) {
    case STATES.ADD_REMINDER: {
      const payload = {
        ...action.payload,
        id: uuidv4(),
        createdAt: Date.now(),
        updatedAt: Date.now(),
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

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(navigationMiddleware, storageMiddleware)),
);


export default store;