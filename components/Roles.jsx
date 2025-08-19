"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

const Roles = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: "true,",
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
        WheelGesturesPlugin(),
      ]}
    >
      <CarouselContent>
        <CarouselItem>Unstop Campus Ambassador</CarouselItem>
        <CarouselItem>IEEE MEMBER</CarouselItem>
        <CarouselItem>ICC MEMBER</CarouselItem>
        <CarouselItem>FullStack Developer</CarouselItem>
        <CarouselItem>GCC Core Member</CarouselItem>
        {/* <CarouselItem>ML Engineer</CarouselItem> */}
        {/* <CarouselItem>AI Researcher</CarouselItem> */}
      </CarouselContent>
    </Carousel>
  );
};

export default Roles;
