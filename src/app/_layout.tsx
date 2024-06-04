import React from "react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { NativeWindStyleSheet } from "nativewind";
import { store } from "../store/store";

// Needed for NativeWind styles to take effect on web app.
NativeWindStyleSheet.setOutput({
  default: "native",
});

const Layout = () => {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerTitle: ''
        }} />
    </Provider>
  )
}

export default Layout;