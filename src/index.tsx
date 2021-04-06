import React from 'react';
import {Container} from './navigation';
import {Provider} from 'react-redux';
import {store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};

export default App;
