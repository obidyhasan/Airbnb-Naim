import logo from "@/assets/Logo/Airbnb_Logo.webp";
import onlyLogo from "@/assets/Logo/Airbnb_only_logo.png";
import webIcon from "@/assets/icon/web.svg";
import menuIcon from "@/assets/icon/menu.svg";
import homeImg from "@/assets/image/home_img.png";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router";
import { Button } from "../ui/button";

const DetailsServiceNavbar = () => {
  return (
    <nav className="border-b sticky top-0 z-50 bg-white hidden md:flex">
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-6 md:px-8 md:flex justify-between items-center gap-5">
          <Link to={"/"} className="max-w-[102px] my-8 hidden lg:flex">
            <img src={logo} alt="Airbnb Logo" />
          </Link>
          <Link to={"/"} className="max-w-9 lg:hidden">
            <img src={onlyLogo} alt="Airbnb Logo" />
          </Link>

          <div className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="my-auto cursor-pointer">
              <div className="bg-white border rounded-full flex justify-center items-center p-2 gap-3 shadow-md ">
                <div className="flex items-center justify-center gap-3">
                  <img src={homeImg} alt="home image" className="w-7 ml-2" />
                  <h1 className="font-bold">Anywhere</h1>
                </div>
                <div>
                  <h1 className="border-l border-r px-3 font-bold">Anytime</h1>
                </div>
                <div>
                  <h1 className="font-bold">Add Guests</h1>
                </div>
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  className="rounded-full bg-[#ff385c] hover:bg-[#ff385c]"
                >
                  <IoSearch className="text-white" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 my-6">
            <Button
              variant={"ghost"}
              className="rounded-full font-bold text-[15px]  hidden lg:flex"
            >
              Become a host
            </Button>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-full bg-muted hover:bg-gray-200 cursor-pointer"
            >
              <img src={webIcon} alt="web icon" className="w-4" />
            </Button>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-full hover:bg-gray-200 cursor-pointer"
            >
              <img src={menuIcon} alt="menu icon" className="w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DetailsServiceNavbar;
