import { EffectCards } from "swiper";
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
import CardComponent from "../card/card.component";
import type { Card } from "../../types";

type Props = {
  cards: Omit<Card, "number">[];
};

const CardGroup = ({ cards }: Props) => (
  <Swiper effect="cards" grabCursor modules={[EffectCards]}>
    {/* TODO: Sort the cards by the shuffled order */}
    {cards.map((card, idx) => (
      <SwiperSlide key={card.title}>
        <CardComponent {...card} number={idx + 1} />
      </SwiperSlide>
      // TODO: add shuffle button
    ))}
  </Swiper>
);

export default CardGroup;
