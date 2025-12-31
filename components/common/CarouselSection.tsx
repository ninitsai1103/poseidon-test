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
  const carouselList = [
    Carousel01,
    Carousel02,
    Carousel03,
    Carousel04,
    Carousel05,
    Carousel06,
    Carousel07,
    Carousel08,
    Carousel09,
  ];

  const [api, setApi] = useState<CarouselApi>(); // Embla Carousel API
  const [currentIndex, setCurrentIndex] = useState(0); // 當前輪播的左側 slide index
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]); //判斷哪些 slide 要加遮罩

  const handleImgSelect = (index: number) => {
    if (!api) return;

    if (index === 0) {
      api.scrollTo(carouselList.length - 1);
    } else {
      api.scrollTo(index - 1);
    }
  };

  useEffect(() => {
    if (!api) return;

     // 讓輪播滾到選中的圖片
    const updateIndexes = () => {
      const selected = api.selectedScrollSnap();
      const realIndex =
        ((selected % carouselList.length) + carouselList.length) %
        carouselList.length;

      setCurrentIndex(realIndex);

      const visible = [
        realIndex,
        (realIndex + 1) % carouselList.length,
        (realIndex + 2) % carouselList.length,
      ];

      setVisibleIndexes(visible);
    };

    updateIndexes();
    api.on("select", updateIndexes);

    return () => {
      api.off("select", updateIndexes);
    };
  }, [api, carouselList.length]);

  const middleIndex = (currentIndex + 1) % carouselList.length;

  return (
    <>
      {/* 上方  */}
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
            const isMiddle = index === middleIndex;
            const shouldShowOverlay = isVisible && !isMiddle;

            return (
              <CarouselItem
                key={index}
                className="pt-1 lg:pl-1 pl-4 lg:pr-1 pr-4  lg:basis-1/3"
              >
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

      {/* 下方 */}
      <div className="flex justify-center lg:w-285 w-full gap-3 mt-6 overflow-x-auto hide-scrollbar mx-auto px-4 lg:px-0">
        {carouselList.map((item, index) => {
          const isMiddle = index === middleIndex;
          const shouldShowOverlay = !isMiddle;

          return (
            <div
              key={index}
              className="relative w-29 h-18.5 shrink-0 cursor-pointer"
              onClick={() => handleImgSelect(index)}
            >
              <Image src={item} alt="img" fill className="object-cover" />
              {shouldShowOverlay && (
                <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
