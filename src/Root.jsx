import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import createStore from './state';
import registerServiceWorker from './registerServiceWorker';

(async () => {
  const store = await createStore();
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
})();

registerServiceWorker();
