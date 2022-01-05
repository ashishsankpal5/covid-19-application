import React from "react";
import App from "./App";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
