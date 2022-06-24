import type { NextPage } from "next";
import Head from "next/head";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { MdConstruction } from "react-icons/md";
import { CardGroup } from "../components";
import { Card } from "../types";

const cards: Omit<Card, "number">[] = [
  {
    title: "Foo",
    icon: MdConstruction,
    body: "lorem ipsum dolar sit amet.",
    tags: [],
    lastReviewed: 0,
  },
  {
    title: "Bar",
    icon: MdConstruction,
    body: "lorem ipsum dolar sit amet.",
    tags: [],
    lastReviewed: 0,
  },
  {
    title: "Baz",
    icon: MdConstruction,
    body: "lorem ipsum dolar sit amet.",
    tags: [],
    lastReviewed: 0,
  },
];

const Home: NextPage = () => (
  <Box px={8}>
    <Head>
      <title>Flash | The learning aid</title>
      <meta
        name="description"
        content="Flash allows you to build up flashcards to aid your learning"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Flex
      minHeight="100vh"
      py={16}
      direction="column"
      justify="center"
      align="center"
    >
      <Heading as="h1" m={0} size="4xl" textAlign="center">
        Flash
      </Heading>

      <Text my={16} mx={0} fontSize="2xl" textAlign="center">
        The flashcard learning aid
      </Text>

      <CardGroup cards={cards} />
    </Flex>
  </Box>
);

export default Home;
