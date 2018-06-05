import { createStore } from 'redux';
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

const rootReducer = (state = {}, action) => ({
  reminders: remindersReducer(state.reminders, action),
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
