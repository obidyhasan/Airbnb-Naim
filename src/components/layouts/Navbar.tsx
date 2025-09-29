import logo from "@/assets/Logo/Airbnb_Logo.webp";
import onlyLogo from "@/assets/Logo/Airbnb_only_logo.png";
import webIcon from "@/assets/icon/web.svg";
import menuIcon from "@/assets/icon/menu.svg";
import homeImg from "@/assets/image/home_img.png";
import experiencesImg from "@/assets/image/experiences_icon.png";
import serviceImg from "@/assets/image/services_icon.png";
import { Button } from "../ui/button";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { toast } from "sonner";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [guest, setGuest] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const searchHandle = () => {
    if (!location) {
      return toast.error("Select you destinations");
    }

    if (!startDate) {
      return toast.error("Select you check in date");
    }
    if (!endDate) {
      return toast.error("Select you check out date");
    }
    if (!guest) {
      return toast.error("Select you guest number");
    }

    toast.info("Not available right now!");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ease-in-out bg-[#FCFCFC]`}
    >
      <div className="max-w-[1920px] hidden mx-auto px-6 lg:px-12 md:flex justify-between items-center gap-5 relative">
        <Link to={"/"} className="max-w-[102px] my-8 hidden lg:flex">
          <img src={logo} alt="Airbnb Logo" />
        </Link>
        <Link to={"/"} className="max-w-9 lg:hidden">
          <img src={onlyLogo} alt="Airbnb Logo" />
        </Link>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <AnimatePresence mode="wait">
            {isScrolled ? (
              <motion.div
                key="scrolled"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="my-auto"
              >
                <div className="bg-white border-muted rounded-full flex justify-center items-center p-2 gap-3 shadow-md">
                  <div className="flex items-center justify-center gap-3">
                    <img src={homeImg} alt="home image" className="w-7 ml-2" />
                    <h1 className="font-bold">Anywhere</h1>
                  </div>
                  <div>
                    <h1 className="border-l border-r px-3 font-bold">
                      Anytime
                    </h1>
                  </div>
                  <div>
                    <h1 className="font-bold">Add Guests</h1>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-[#ff385c] hover:bg-[#ff385c]"
                  >
                    <IoSearch className="text-white" />
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="flex gap-7"
              >
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
                <div className="flex items-center justify-center gap-3 py-2">
                  <figure>
                    <img
                      src={serviceImg}
                      className="w-9 hover:scale-125 duration-300 transform"
                      alt="home icon"
                    />
                  </figure>
                  <h1 className="text-base text-gray-600">Services</h1>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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

      {/* For small screen */}
      <div className="px-6 lg:px-12 md:hidden">
        <div className="w-full mt-2.5 bg-white rounded-full shadow-md  border-gray-100 border flex justify-between max-w-5xl mx-auto ">
          <div className="flex items-center justify-center mx-auto my-4 gap-2">
            <IoSearch />
            <h2 className="font-semibold">Start your search</h2>
          </div>
        </div>
        <div>
          <div className="flex gap-5 items-center justify-between px-8 mt-5">
            <div className="flex flex-col items-center justify-center border-black border-b-2">
              <figure>
                <img src={homeImg} className="w-6" alt="home icon" />
              </figure>
              <h1 className="font-bold text-xs text-muted-foreground">Homes</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <figure>
                <img src={experiencesImg} className="w-6" alt="home icon" />
              </figure>
              <h1 className=" text-xs text-muted-foreground">Experiences</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <figure>
                <img src={serviceImg} className="w-6" alt="home icon" />
              </figure>
              <h1 className=" text-xs text-muted-foreground">Services</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            key="searchbar"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="px-6 lg:px-12 hidden md:flex"
          >
            <div className=" w-full mb-9 md:mb-9 mt-4 bg-white rounded-full shadow-xl border-gray-100 border flex justify-between max-w-3xl mx-auto ">
              <div className="hover:bg-gray-100 grow py-2 px-8 rounded-full flex flex-col items-stretch justify-center">
                <h2 className="font-bold text-xs">Where</h2>
                <h2 className="text-muted-foreground text-[14px] mt-0.5">
                  <input
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Search destinations"
                    className=" border-none outline-none placeholder:text-muted-foreground"
                  />
                </h2>
              </div>
              <div className="flex">
                <Popover>
                  <PopoverTrigger>
                    <div className="hover:bg-gray-100 w-full h-full flex flex-col items-stretch justify-center rounded-full">
                      <div className="border-l border-r hover:border-none px-8 text-left">
                        <h2 className="font-bold text-xs">Check in</h2>
                        <h2 className="text-gray-500 text-[14px] w-max">
                          {startDate
                            ? format(startDate, "yyyy-MM-dd")
                            : "Add dates"}
                        </h2>
                      </div>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      className=""
                      captionLayout="dropdown"
                      disabled={{ before: new Date() }}
                    />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger>
                    <div className="hover:bg-gray-100 w-full h-full rounded-full flex flex-col items-stretch justify-center">
                      <div className=" border-r hover:border-none px-8 text-left">
                        <h2 className="font-bold text-xs">Check out</h2>
                        <h2 className="text-gray-500 text-[14px] w-max">
                          {endDate
                            ? format(endDate, "yyyy-MM-dd")
                            : "Add dates"}
                        </h2>
                      </div>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      className=""
                      captionLayout="dropdown"
                      disabled={{ before: new Date() }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grow hover:bg-gray-100 py-2 pl-4 pr-2  rounded-full flex justify-between items-center gap-4">
                <div className="flex flex-col items-stretch justify-center ">
                  <h2 className="font-bold text-xs">Who</h2>
                  <h2 className="text-muted-foreground text-[14px] mt-0.5">
                    <input
                      onChange={(e) => setGuest(e.target.value)}
                      placeholder="Add guest"
                      className=" border-none outline-none placeholder:text-muted-foreground"
                    />
                  </h2>
                </div>

                <Button
                  onClick={searchHandle}
                  variant={"ghost"}
                  className="w-12 h-12 rounded-full bg-[#ff385c] hover:bg-[#ff385c] cursor-pointer"
                >
                  <IoSearch className="text-white text-3xl" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
