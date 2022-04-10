import { SafeAreaView, StatusBar } from 'react-native';
import Navigation from './src/navigation';
import { NativeBaseProvider, useColorMode } from 'native-base';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/redux/store';

export default function App() {
  const { color } = useColorMode();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <NativeBaseProvider>
            <Navigation />
          </NativeBaseProvider>
        </SafeAreaView> 
      </PersistGate>
    </Provider>
  );
}