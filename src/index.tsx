import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {Container} from './navigation';
import {store} from './store';
import {setI18nConfig} from './utils/i18n-helper';

const App = () => {
  const theme = useColorScheme();

  useEffect(() => {
    setI18nConfig();
  }, []);

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
