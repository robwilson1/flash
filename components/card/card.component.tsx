import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Icon,
  Heading,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

type Props = {
  title: string;
  icon: IconType;
  body: string;
};

const Card = ({ title, icon, body }: Props) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFrontShowing, setShowFront] = useState(false);

  return (
    <motion.article
      animate={isFlipped ? "back" : "front"}
      variants={{ front: { rotateY: 0 }, back: { rotateY: 180 } }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.7, bounce: 0 }}
      onAnimationStart={() =>
        setTimeout(
          () => setShowFront((_isFrontShowing) => !_isFrontShowing),
          prefersReducedMotion ? 0 : 300
        )
      }
    >
      <Flex
        p={6}
        height={{ base: "250px", md: "350px", xl: "500px" }}
        width={{ base: "250px", md: "350px", xl: "500px" }}
        direction="column"
        justify="center"
        align="center"
        border="1px"
        borderColor="gray.100"
        borderRadius="xl"
        boxShadow="0 3px 10px 0 rgba(169, 169, 169, 0.302)"
        cursor="pointer"
        onClick={() => setIsFlipped((_isFlipped) => !_isFlipped)}
      >
        {isFrontShowing ? (
          <>
            <Icon as={icon} w={16} h={16} />
            <Heading as="h3" mt={6} size={{ base: "2xl", md: "3xl" }}>
              {title}
            </Heading>
          </>
        ) : (
          <Box mt={6} transform="rotateY(180deg)">
            <Text fontSize={{ base: "xl", md: "3xl" }}>{body}</Text>
          </Box>
        )}
      </Flex>
    </motion.article>
  );
};

export default Card;
