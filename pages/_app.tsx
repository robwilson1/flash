import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "../theme";
import { Layout } from "../components";

// eslint-disable-next-line import/no-unresolved
import "swiper/css/bundle";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/effect-cards";
import "../styles/swiper.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={extendTheme(theme)} resetCSS>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
);

export default MyApp;
