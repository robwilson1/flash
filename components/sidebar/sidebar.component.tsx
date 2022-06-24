import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  LinkBox,
  LinkOverlay,
  Heading,
} from "@chakra-ui/react";
import { MdHome, MdSearch } from "react-icons/md";

const navMenu = [
  { name: "Home", icon: MdHome, route: "/" },
  { name: "Search", icon: MdSearch, route: "/search" },
];

const groups = Array.from({ length: 30 }).map((_, idx) => `Group ${idx + 1}`);

const Sidebar = () => (
  <Box width="100%" height="100vh" px={2} as="aside">
    <Box py={6} height="100%">
      <Box mb={6} px={6}>
        <Heading as="h3" size="lg">
          Flash
        </Heading>
      </Box>

      <Box mb={6}>
        <List spacing={2}>
          {navMenu.map((menu) => (
            <ListItem px={6} fontSize="md" key={menu.name}>
              <LinkBox>
                <NextLink href={menu.route} passHref>
                  <LinkOverlay>
                    <ListIcon as={menu.icon} mr={6} />
                    {menu.name}
                  </LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider my={6} bg="gray.600" opacity={1} />

      <Box height="80%" overflowY="auto">
        <List spacing={2}>
          {groups.map((group) => (
            <ListItem key={group} px={6}>
              <LinkBox>
                <NextLink href="/" passHref>
                  <LinkOverlay>{group}</LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  </Box>
);

export default Sidebar;
