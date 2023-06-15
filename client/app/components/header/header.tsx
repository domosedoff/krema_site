import Buttom from "@/app/UI/button/button";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  return (
    <header className="container fixed flex justify-between shadow-lg h-14 items-center px-5 md:px-8 bg-red-100">
      <Link href={"/"} className="flex items-center space-x-4">
        <Image src={Logo} alt={""} height={50}></Image>
        <span className="font-header_logo text-red-950">SHAMANKA BEAUTY</span>
      </Link>

      <span className="font-card_title text-2xl font-extrabold">РЕЦЕПТЫ </span>
      <div className="flex items-center">
        <Buttom />
        <AiOutlineMenuUnfold className="lg:hidden ml-6 w-10 h-10" />
      </div>
    </header>
  );
};

export default Header;
