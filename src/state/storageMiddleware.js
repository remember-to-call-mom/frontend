import localforage from 'localforage';
import { APP_NAME } from '../constants';

localforage.config({
  name: APP_NAME,
  version: 0,
  storeName: APP_NAME,
});

const sanitizer = state => state;

export default store => next => (action) => {
  const result = next(action);
  const state = store.getState();
  const sanitizedState = sanitizer(state);
  localforage.setItem('state', sanitizedState)
    .catch(err => console.error('Saving failed:', err));
  return result;
};
