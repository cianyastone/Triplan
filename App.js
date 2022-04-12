import { SafeAreaView, StatusBar } from 'react-native';
import Navigation from './src/navigation';
import { NativeBaseProvider, useColorMode } from 'native-base';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store, persistor } from './src/redux/store';

const white="#fff";
const green="#7EBB94";
const darkBlack="#262626";

export default function App() {
  const { colorMode } = useColorMode();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider style={{flex: 1, backgroundColor: colorMode == 'light' ? white : darkBlack,}}>
          <NativeBaseProvider>
            <Navigation />
          </NativeBaseProvider>
        </SafeAreaProvider> 
      </PersistGate>
    </Provider>
  );
}