import Image from "next/image";
import Logo from "@/public/common/logo.svg";
import SearchIcon from "@/public/common/ic_search.svg";
import MenuIcon from "@/public/common/ic_menu.svg"

export default function Header() {
  const navList = [
    {
      label: "最新上架",
      router: "",
    },
    {
      label: "人氣排行",
      router: "",
    },
    {
      label: "熱門活動",
      router: "",
    },
    {
      label: "重要公告",
      router: "",
    },
    {
      label: "網頁儲值",
      router: "",
    },
    {
      label: "我的遊戲",
      router: "",
    },
  ];
  return (
    <div className="flex items-center justify-between w-full px-2 py-4 bg-[#141414DB] text-[#FFFFFF] border-b border-[#FFFFFF33] backdrop-blur-[0.625rem]">
      <div className="flex items-center lg:pl-14">
        <Image src={Logo} width={121} height={25} alt="logo" />
        <div className="lg:flex hidden items-center xl:gap-10 lg:gap-5 xl:pl-24 lg:pl-12">
          {navList.map((item) => (
            <div key={item.label} className="font-light text-[0.875rem]">
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <div className="lg:flex hidden items-center lg:pr-14 gap-5">
        <Image src={SearchIcon} width={22} height={22} alt="search" />
        <div className="flex items-center p-2.5 gap-2.5 font-normal text-xs">
          <div>登入</div>
          <div className="border-r border-[#B0B0B0] h-3"></div>
          <div>註冊</div>
        </div>
        <div className="-my-6 border-r border-[#FFFFFF33] h-18 rotate-[24.44deg]"></div>
        <Image src={MenuIcon} width={40} height={32} alt="menu" />
      </div>
    </div>
  );
}
