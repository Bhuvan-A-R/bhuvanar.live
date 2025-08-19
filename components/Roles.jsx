"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import UnstopAmbassadorPopover from "./UnstopAmbassadorPopover";

const POPOVER_END_DATE = new Date("2025-08-25T23:59:59");

const Roles = () => {
  const [showPopover, setShowPopover] = useState(false);

  useEffect(() => {
    const now = new Date();
    if (now <= POPOVER_END_DATE) {
      setShowPopover(true);
      const timer = setTimeout(() => setShowPopover(false), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopover = () => {
    setShowPopover(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <UnstopAmbassadorPopover
        show={showPopover}
        onClose={handleClosePopover}
      />
      <Carousel
        opts={{
          align: "start",
          loop: true,
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
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Roles;
