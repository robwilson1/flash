import { Box } from "@chakra-ui/react";
import { Sidebar } from "..";

import type { ComponentWithChildren } from "../../types";

const Layout = ({ children }: ComponentWithChildren) => (
  <Box width="100vw" height="100vh">
    <Box position="absolute" top="0" left="0" width="250px">
      <Sidebar />
    </Box>

    <Box marginLeft="250px" borderLeft="1px" borderLeftColor="gray.100">
      {children}
    </Box>
  </Box>
);

export default Layout;
