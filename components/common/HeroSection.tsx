import Image from "next/image";
import Hero from "@/public/Home/hero.png";
import AppLogo from "@/public/Home/app_logo.png";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative w-full aspect-1920/520">
      <Image src={Hero} alt="hero" priority fill className="object-cover" />

      <div
        className="
          absolute
          xl:bottom-[-15%]
          lg:bottom-[-25%]
          md:bottom-[-80%]
          md:my-0
          my-20
          left-0
          w-full"
      >
        <div
          className="
          flex
          flex-col
          gap-6
          items-start
          md:flex-row
          md:justify-evenly
          md:items-center
          lg:p-7.5
          p-4
          backdrop-blur-[10px]
          bg-[#1E1E1E4A]
        "
        >
          <div className="flex shrink-0 gap-7">
            <Image src={AppLogo} width={102} height={102} alt="app-logo" />
            <div className="flex flex-col gap-2.5 items-start">
              <div className="font-bold text-[1.75rem]">勝利女神妮姬</div>
              <div className="text-[0.75rem] text-[#9B9B9B]">
                GODDESS OF VICTORY: NIKKE
              </div>
              <Button variant="roundedOutline" size="sm">
                網頁遊戲
              </Button>
            </div>
          </div>

          <div className="xl:max-w-213 lg:max-w-80">
            第3人稱射擊手遊。集中了《天命之子》所有Live2D ver 3.3和2.5D PAPER
            FOLDING技術來實現生動的戰鬥動作。故事背景講述在被外星人淘汰的地球，代替人類上戰場的戰鬥少女的故事。
          </div>

          <Button className="lg:block hidden bg-[#DE280A] rounded-lg h-20 w-53.25 font-bold text-xl">
            開始遊戲
          </Button>
        </div>
        <div className="lg:px-7.5 px-4">
          <Button className="w-full block lg:hidden bg-[#393939]">
            僅可在PC上遊玩
          </Button>
        </div>
      </div>
    </div>
  );
}
