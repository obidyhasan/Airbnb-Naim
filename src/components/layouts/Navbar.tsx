import logo from "@/assets/Logo/Airbnb_Logo.webp";
import webIcon from "@/assets/icon/web.svg";
import menuIcon from "@/assets/icon/menu.svg";
import homeImg from "@/assets/image/home_img.png";
import { Button } from "../ui/button";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#FCFCFC] border-b border-muted">
      <div className="max-w-[1920px] mx-auto px-12 flex justify-between items-center gap-5">
        <Link to={"/"} className="max-w-[102px] my-8">
          <img src={logo} alt="Airbnb Logo" />
        </Link>
        <div className="bg-white border-muted rounded-full flex justify-center items-center p-2 gap-3 shadow-md">
          <div className="flex items-center justify-center">
            <img src={homeImg} alt="home image" className="w-10" />
            <h1 className="font-bold">Anywhere</h1>
          </div>
          <div>
            <h1 className="border-l border-r px-3 font-bold">Anytime</h1>
          </div>
          <div>
            <h1 className="font-bold">Anytime</h1>
          </div>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="rounded-full bg-[#ff385c] hover:bg-[#ff385c]"
          >
            <IoSearch className="text-white" />
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant={"ghost"}
            className="rounded-full font-bold text-[15px]"
          >
            Become a host
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="rounded-full bg-muted"
          >
            <img src={webIcon} alt="web icon" className="w-4" />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="rounded-full bg-muted"
          >
            <img src={menuIcon} alt="menu icon" className="w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
