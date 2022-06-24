import { useState } from "react";
import {
  Flex,
  Text,
  Icon,
  Heading,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { Card } from "../../types";

const CardComponent = ({ title, icon, body, lastReviewed, number }: Card) => {
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
        position="absolute"
        height={{ base: "250px", md: "350px", xl: "500px" }}
        width={{ base: "250px", md: "350px", xl: "500px" }}
        direction="column"
        justify="center"
        align="center"
        border="1px"
        borderColor="gray.100"
        borderRadius="2xl"
        bg="white"
        boxShadow="0 3px 10px 0 rgba(169, 169, 169, 0.302)"
        cursor="pointer"
        onClick={() => setIsFlipped((_isFlipped) => !_isFlipped)}
      >
        {isFrontShowing ? (
          <>
            <Text position="absolute" top={4} right={4} color="gray.500">
              #{number}
            </Text>
            <Icon as={icon} w={16} h={16} />
            <Heading as="h3" mt={6} size={{ base: "2xl", md: "3xl" }}>
              {title}
            </Heading>
            <Text position="absolute" bottom={4} left={4} color="gray.500">
              {/* TODO: use a 'strength' meter which is full when just reviwed and degrades over time */}
              {lastReviewed ? `Last reviewed: ${lastReviewed}` : "New card"}
            </Text>
          </>
        ) : (
          <Flex
            position="relative"
            width="100%"
            height="100%"
            transform="rotateY(180deg)"
            justify="center"
            align="center"
          >
            <Text position="absolute" top={4} left={4} color="gray.500">
              #{number}
            </Text>
            <Text fontSize={{ base: "xl", md: "3xl" }}>{body}</Text>
          </Flex>
        )}
      </Flex>
    </motion.article>
  );
};

export default CardComponent;
