import { Box } from "@chakra-ui/react";
import CardComponent from "../card/card.component";
import type { Card } from "../../types";

type Props = {
  cards: Card[];
};

const CardGroup = ({ cards }: Props) => (
  <Box>
    {cards.map((card) => (
      <CardComponent key={card.title} {...card} />
    ))}
  </Box>
);

export default CardGroup;
