import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "../theme";
import { Layout } from "../components";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={extendTheme(theme)} resetCSS>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
);

export default MyApp;
