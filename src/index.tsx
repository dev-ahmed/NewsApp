import React from 'react';
import {Container} from './navigation';
import {Provider} from 'react-redux';
import {store} from './store';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const theme = useColorScheme();

  return (
    <Provider store={store}>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <SafeAreaProvider>
        <Container />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
