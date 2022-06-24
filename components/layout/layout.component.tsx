import { Box, Show } from "@chakra-ui/react";
import Sidebar from "../sidebar/sidebar.component";

import type { ComponentWithChildren } from "../../types";
import DarkModeToggle from "../dark-mode-toggle/dark-mode-toggle.component";

const Layout = ({ children }: ComponentWithChildren) => (
  <Box width="100vw" height="100vh">
    <Box position="absolute" top={2} right={2}>
      <DarkModeToggle />
    </Box>

    <Show above="lg">
      <Box position="absolute" top="0" left="0" width="250px">
        <Sidebar />
      </Box>
    </Show>

    <Box
      marginLeft={{ base: "0", lg: "250px" }}
      borderLeft={{ base: "0", lg: "1px" }}
      borderLeftColor="gray.100"
    >
      {children}
    </Box>
  </Box>
);

export default Layout;
