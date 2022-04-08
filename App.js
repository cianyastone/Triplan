import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import { NativeBaseProvider } from 'native-base';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';


import { store, persistor } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <SafeAreaView style={{flex: 1}} >
            <NativeBaseProvider>
              <Navigation />
            </NativeBaseProvider>
          </SafeAreaView> 
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}