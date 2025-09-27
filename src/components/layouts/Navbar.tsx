import logo from "@/assets/Logo/Airbnb_Logo.webp";
import webIcon from "@/assets/icon/web.svg";
import menuIcon from "@/assets/icon/menu.svg";
import homeImg from "@/assets/image/home_img.png";
import experiencesImg from "@/assets/image/experiences_icon.png";
import serviceImg from "@/assets/image/services_icon.png";
import { Button } from "../ui/button";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80); // adjust threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <nav className="sticky top-0 z-50 w-full bg-[#FCFCFC] border-b border-muted h-full">
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-[#FCFCFC]`}
    >
      <div className="max-w-[1920px] mx-auto px-12 flex justify-between items-start gap-5 ">
        <Link to={"/"} className="max-w-[102px] my-8">
          <img src={logo} alt="Airbnb Logo" />
        </Link>
        {isScrolled ? (
          <div className="my-auto">
            <div className="bg-white border-muted rounded-full flex justify-center items-center p-2 gap-3 shadow-md ">
              <div className="flex items-center justify-center gap-3">
                <img src={homeImg} alt="home image" className="w-7 ml-2" />
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
          </div>
        ) : (
          <div className="my-7 flex flex-col items-center">
            <div className="flex gap-7">
              <div className="flex items-center justify-center gap-3 py-2 border-black border-b-3">
                <figure>
                  <img src={homeImg} className="w-10" alt="home icon" />
                </figure>
                <h1 className="font-bold text-base">Homes</h1>
              </div>
              <div className="flex items-center justify-center gap-1 py-2">
                <figure>
                  <img
                    src={experiencesImg}
                    className="w-10 hover:scale-125 duration-300 transform"
                    alt="experiences icon"
                  />
                </figure>
                <h1 className="text-base text-gray-600">Experiences</h1>
              </div>
              <div className="flex items-center justify-center gap-3 py-2 ">
                <figure>
                  <img
                    src={serviceImg}
                    className="w-9 hover:scale-125 duration-300 transform"
                    alt="home icon"
                  />
                </figure>
                <h1 className="text-base text-gray-600">Services</h1>
              </div>
            </div>
            <div className="mt-6 bg-white rounded-full shadow-xl border-gray-100 border flex">
              <div className="hover:bg-gray-100 py-2 px-8 rounded-full flex flex-col items-stretch justify-center">
                <h2 className="font-bold text-xs w-52">Where</h2>
                <h2 className="text-gray-500 text-[14px]">
                  Search destinations
                </h2>
              </div>
              <div className="hover:bg-gray-100 flex flex-col items-stretch justify-center rounded-full">
                <div className="border-l border-r hover:border-none px-8">
                  <h2 className="font-bold text-xs">Check in</h2>
                  <h2 className="text-gray-500 text-[14px]">Add dates</h2>
                </div>
              </div>
              <div className="hover:bg-gray-100 rounded-full flex flex-col items-stretch justify-center">
                <div className=" border-r hover:border-none px-8">
                  <h2 className="font-bold text-xs">Check out</h2>
                  <h2 className="text-gray-500 text-[14px]">Add dates</h2>
                </div>
              </div>
              <div className="hover:bg-gray-100 py-2 pl-8 pr-2  rounded-full flex justify-between items-center gap-24">
                <div className="flex flex-col items-stretch justify-center ">
                  <h2 className="font-bold text-xs">Who</h2>
                  <h2 className="text-gray-500 text-[14px]">Add guests</h2>
                </div>
                <Button
                  variant={"ghost"}
                  className="w-12 h-12 rounded-full bg-[#ff385c] hover:bg-[#ff385c]"
                >
                  <IoSearch className="text-white text-3xl" />
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center gap-4 my-8">
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
