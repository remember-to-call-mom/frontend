import { STATES } from '../constants';

export default store => next => (action) => {
  const result = next(action);

  if (action.type === STATES.ADD_REMINDER) {
    store.dispatch({
      type: STATES.UPDATE_NAVIGATION,
      payload: '/',
    });
  }

  return result;
};
