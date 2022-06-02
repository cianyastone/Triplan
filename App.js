import Navigation from "./src/navigation";
import { NativeBaseProvider, useColorMode } from "native-base";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { store } from "./src/redux/store";

const white = "#fff";
const green = "#7EBB94";
const darkBlack = "#262626";

export default function App() {
  const { colorMode } = useColorMode();
  return (
    <Provider store={store}>
      <SafeAreaProvider
        style={{
          flex: 1,
          backgroundColor: colorMode == "light" ? white : darkBlack,
        }}
      >
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
