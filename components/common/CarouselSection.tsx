"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import type { UseEmblaCarouselType } from "embla-carousel-react";
import Carousel01 from "@/public/Home/carousel_01.png";
import Carousel02 from "@/public/Home/carousel_02.png";
import Carousel03 from "@/public/Home/carousel_03.png";
import Carousel04 from "@/public/Home/carousel_04.png";
import Carousel05 from "@/public/Home/carousel_05.png";
import Carousel06 from "@/public/Home/carousel_06.png";
import Carousel07 from "@/public/Home/carousel_07.png";
import Carousel08 from "@/public/Home/carousel_08.png";
import Carousel09 from "@/public/Home/carousel_09.png";

type CarouselApi = UseEmblaCarouselType[1];

export default function CarouselSection() {
  const carouselList = [Carousel01, Carousel02, Carousel03, Carousel04, Carousel05, Carousel06, Carousel07, Carousel08, Carousel09];
  const [api, setApi] = useState<CarouselApi>();
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    if (!api) return;

    const updateVisibleIndexes = () => {
      const selected = api.selectedScrollSnap();
      // 每次顯示 3 張，所以可見的索引是 [selected, selected+1, selected+2]
      const visible = [selected, selected + 1, selected + 2].filter(
        (idx) => idx < carouselList.length
      );
      setVisibleIndexes(visible);
    };

    updateVisibleIndexes();
    api.on("select", updateVisibleIndexes);

    return () => {
      api.off("select", updateVisibleIndexes);
    };
  }, [api, carouselList.length]);

  return (
    <Carousel 
      className="mt-60 md:mt-56 lg:mt-20"
      setApi={setApi}
      opts={{
        align: "start",
        slidesToScroll: 1,
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent className="-lg:mt-1 md:mt-12 mt-28 -ml-1">
        {carouselList.map((item, index) => {
          const isVisible = visibleIndexes.includes(index);
          const isMiddle = isVisible && visibleIndexes.indexOf(index) === 1;
          const shouldShowOverlay = isVisible && !isMiddle;

          return (
            <CarouselItem key={index} className="pt-1 lg:pl-1 pl-4 lg:pr-1 pr-4 lg:basis-1/3">
              <div className="relative w-full lg:h-89.75 md:h-86 h-55">
                <Image src={item} fill alt="img" className="object-cover" />
                {shouldShowOverlay && (
                  <div className="absolute inset-0 bg-black/50 z-10" />
                )}
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
