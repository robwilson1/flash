import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "../theme";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={extendTheme(theme)} resetCSS>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
