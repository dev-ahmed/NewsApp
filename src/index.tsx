import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {Container} from './navigation';
import {store} from './store';

const App = () => {
  const theme = useColorScheme();

  return (
    <Provider store={store}>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Container />
    </Provider>
  );
};

export default App;
