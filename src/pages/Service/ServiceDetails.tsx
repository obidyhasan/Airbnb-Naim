import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { GoShare } from "react-icons/go";

import success1 from "@/assets/services/success-1.png";
import success2 from "@/assets/services/success-2.png";
import { IoStar } from "react-icons/io5";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { LuKeyboard } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { ImFlag } from "react-icons/im";
import { Progress } from "@/components/ui/progress";
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import logo from "@/assets/Logo/Airbnb_Logo.webp";
import onlyLogo from "@/assets/Logo/Airbnb_only_logo.png";
import webIcon from "@/assets/icon/web.svg";
import menuIcon from "@/assets/icon/menu.svg";
import homeImg from "@/assets/image/home_img.png";
import { IoSearch } from "react-icons/io5";
import { Link, useParams } from "react-router";
import b1 from "@/assets/services/b-1.png";
import b2 from "@/assets/services/download (24).svg";
import b3 from "@/assets/services/download (25).svg";
import a1 from "@/assets/services/download (27).svg";
import a2 from "@/assets/services/download (31).svg";
import kitchen from "@/assets/services/download (23).svg";
import wifi from "@/assets/services/download (22).svg";
import workspace from "@/assets/services/download (21).svg";
import tv from "@/assets/services/download (20).svg";
import elevator from "@/assets/services/download (19).svg";
import washer from "@/assets/services/download (18).svg";
import air from "@/assets/services/download (17).svg";
import hairdryer from "@/assets/services/download (16).svg";
import alarm from "@/assets/services/download (15).svg";

import c1 from "@/assets/services/download (12).svg";
import c2 from "@/assets/services/download (11).svg";
import c3 from "@/assets/services/download (10).svg";
import c5 from "@/assets/services/download (8).svg";
import c6 from "@/assets/services/download (7).svg";
import c7 from "@/assets/services/download (6).svg";

import d1 from "@/assets/services/download (3).svg";
import d2 from "@/assets/services/download.svg";
import d3 from "@/assets/services/download (4).svg";
import d4 from "@/assets/services/download (1).svg";

import type { IFooterLink, IReview, IServiceCard } from "@/types";
import { FaFacebook } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import {
  companyLinks,
  hostingLinks,
  supportLinks,
} from "@/constants/footerData";
import FooterLinkItem from "@/components/modules/Footer/FooterLinkItem";
import { useGetSingleServicesQuery } from "@/redux/features/service/service.api";
import { reviewsData } from "@/constants/commentData";
import ReviewItemCard from "@/components/modules/Service/ReviewItemCard";
import { SkeletonServiceDetails } from "./SkeletonServiceDetails";

const ServiceDetails = () => {
  const { id } = useParams();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { data, isLoading } = useGetSingleServicesQuery({ id });
  const services: IServiceCard = data?.data?.data;
  if (isLoading) {
    return <SkeletonServiceDetails />;
  }

  return (
    <div>
      <nav className="border-b sticky top-0 z-50 bg-white hidden md:flex">
        <div className="w-full">
          <div className="max-w-6xl mx-auto px-6 md:px-8 md:flex justify-between items-center gap-5">
            <Link to={"/"} className="max-w-[102px] my-8 hidden lg:flex">
              <img src={logo} alt="Airbnb Logo" />
            </Link>
            <Link to={"/"} className="max-w-9 lg:hidden">
              <img src={onlyLogo} alt="Airbnb Logo" />
            </Link>

            <div className="my-auto ">
              <div className="bg-white border-muted rounded-full flex justify-center items-center p-2 gap-3 shadow-md ">
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
        </div>
      </nav>
      <section className="relative my-6 max-w-6xl mx-auto px-6 md:px-8">
        {/* title */}
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl hidden md:flex">
            {services?.name}
          </h1>
          <Link className="md:hidden" to={"/"}>
            <FaArrowLeft />
          </Link>
          <div className="text-sm flex items-center">
            <Button
              variant={"ghost"}
              className="flex items-center gap-2 font-semibold underline"
            >
              <GoShare className="text-lg" />
              <p>Share</p>
            </Button>
            <Button
              variant={"ghost"}
              className="flex items-center gap-2 font-semibold underline"
            >
              <Heart className="w-4" />
              <p>Save</p>
            </Button>
          </div>
        </div>
        {/* Image */}
        <div className="mt-5 mb-8">
          <div>
            <figure className="col-span-2 row-span-2 w-full h-full">
              <img
                src={services?.images[0]}
                alt="room image"
                className="md:hidden bg-muted w-full h-[300px] object-cover rounded-xl"
              />
            </figure>
          </div>
          <div className="md:grid gap-3 grid-cols-4 relative hidden">
            <figure className="col-span-2 row-span-2 w-full h-full">
              <img
                src={services?.images[0]}
                alt="room image"
                className="cursor-pointer bg-muted w-full h-full object-cover rounded-bl-xl rounded-tl-xl"
              />
            </figure>
            <figure className="h-60">
              <img
                src={services?.images[1]}
                alt="room image"
                className="cursor-pointer bg-muted w-full h-full object-cover"
              />
            </figure>
            <figure className="h-60">
              <img
                src={services?.images[2]}
                alt="room image"
                className="cursor-pointer bg-muted w-full h-full object-cover rounded-tr-xl"
              />
            </figure>
            <figure className="h-60">
              <img
                src={services?.images[3]}
                alt="room image"
                className="cursor-pointer bg-muted w-full h-full object-cover"
              />
            </figure>
            <figure className="h-60">
              <img
                src={services?.images[4]}
                alt="room image"
                className="cursor-pointer bg-muted w-full h-full object-cover rounded-br-xl"
              />
            </figure>
            <Button
              variant={"ghost"}
              className="border-black border font-bold bg-white absolute bottom-5 right-5 hidden md:flex"
            >
              <img src={a1} alt="icon" className="w-4" />
              Show all photos
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10 border-b pb-10">
          <div className="col-span-3 lg:col-span-2">
            <div>
              <h2 className="font-semibold text-2xl">{services?.city}</h2>
              <p>3 guests · 1 bedroom · 1 bed · 1 bath</p>
            </div>
            <div className="border rounded-2xl py-4 px-2 sm:p-5 my-6 flex gap-2 sm:gap-4 justify-between lg:justify-center items-center">
              <div className="flex items-center gap-1 sm:gap-2 grow lg:grow-0 justify-center">
                <img src={success1} alt="success image" className="w-6" />
                <p className="w-min text-center font-bold text-lg leading-4.5">
                  Guest favorite
                </p>
                <img src={success2} alt="success image" className="w-6" />
              </div>
              <p className="flex-1 text-sm font-bold hidden lg:flex">
                One of the most loved homes on Airbnb, according to guests
              </p>
              <div className="flex">
                <div className="text-center border-r px-2 sm:px-5">
                  <p className="font-bold text-xl">{services?.rate}</p>
                  <div className="flex items-center justify-center gap-0.5">
                    <IoStar className="w-3" />
                    <IoStar className="w-3" />
                    <IoStar className="w-3" />
                    <IoStar className="w-3" />
                    <IoStar className="w-3" />
                  </div>
                </div>
                <div className="text-center  px-2 sm:px-5">
                  <p className="font-bold text-xl">
                    {services?.author?.reviews}
                  </p>
                  <p className="text-sm font-bold">Reviews</p>
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-center pt-2 pb-5 border-b">
              <figure className="relative">
                <img
                  src="https://i.ibb.co.com/Zz0PMNj/listening-applicant.jpg"
                  alt="author image"
                  className="w-10 h-10 object-cover rounded-full bg-muted"
                />
                <img
                  src={a2}
                  alt="icon"
                  className="absolute bottom-0 right-0 w-4"
                />
              </figure>
              <div>
                <h1 className="font-bold">Hosted by Ken Tat</h1>
                <p className="text-sm text-muted-foreground">
                  Superhost · 3 years hosting{" "}
                </p>
              </div>
            </div>
            <div className="py-7 flex flex-col gap-5 border-b">
              <div className="flex gap-5 ">
                <figure>
                  <img src={b1} alt="icon" className="w-7 h-7" />
                </figure>
                <div>
                  <h1 className="font-semibold">Top 10% of homes</h1>
                  <p className="text-sm text-muted-foreground">
                    This home is highly ranked based on ratings, reviews, and
                    reliability.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 ">
                <figure>
                  <img src={b3} alt="icon" className="w-6 h-6" />
                </figure>
                <div>
                  <h1 className="font-semibold">Dive right in</h1>
                  <p className="text-sm text-muted-foreground">
                    This is one of the few places in the area with a pool.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 ">
                <figure>
                  <img src={b2} alt="" className="w-6 h-6" />
                </figure>
                <div>
                  <h1 className="font-semibold">Self check-in</h1>
                  <p className="text-sm text-muted-foreground">
                    Check yourself in with the lockbox.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-xl p-4 my-7 hidden sm:flex">
              <p className="flex gap-1">
                Some info has been automatically translated.
                <span className="font-bold underline">Show original</span>
              </p>
            </div>
            <div className="border-b pb-6 mt-5">
              <p>
                Japanese style decoration for all travelers and long term stays.
                My place is located at the heart of Kuala Lumpur city which is
                only 350m away from KLCC (Twin Tower and Suria KLCC). There are
                1 LRT station (KLCC) and 1 Monorail (Bukit Nenas) within 10 mins
                walk. The restaurants and convenient stores are all within the
                walking distance. This studio has 1 bed and 1 sofa bed which can
                fit up to 3 guests. The design is classic and well equipped with
                all the necessary amenities.
              </p>
              <p>...</p>

              <Button
                variant={"ghost"}
                className="bg-muted w-full sm:w-max font-bold text-base py-6 px-6 my-4"
              >
                Show more
              </Button>
            </div>
            <div className="py-8 border-b">
              <h1 className="font-bold text-xl">Where you'll sleep</h1>
              <img
                src={services?.images[0]}
                alt=""
                className="max-w-60 w-full h-[160px] rounded-lg bg-muted mt-4 mb-3"
              />
              <h3 className="font-bold">Living area</h3>
              <p className="text-sm text-muted-foreground">1 queen bed</p>
            </div>
            <div className="py-8 border-b">
              <h1 className="font-bold text-xl">What this place offers</h1>
              <div className="grid gap-5 grid-cols-2 mt-4 mb-3">
                <div className="space-y-4">
                  <div className="flex gap-4 items-center">
                    <img src={kitchen} alt="icon" className="w-5 h-5" />
                    <span>Kitchen</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img src={workspace} alt="icon" className="w-5 h-5" />
                    <span>Dedicated workspace</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img src={tv} alt="icon" className="w-5 h-5" />
                    <span>TV</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img src={washer} alt="icon" className="w-5 h-5" />
                    <span>Washer</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img src={hairdryer} alt="icon" className="w-5 h-5" />
                    <span>Hair dryer</span>
                  </div>
                </div>
                <div className="space-y-4 hidden sm:flex flex-col">
                  <div className="flex gap-4 items-center">
                    <img src={wifi} alt="icon" className="w-5 h-5" />
                    <span>Fast wifi - 329 Mbps</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img src={b3} alt="icon" className="w-5 h-5" />
                    <span>Pool</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img src={elevator} alt="icon" className="w-5 h-5" />
                    <span>Elevator</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img src={air} alt="icon" className="w-5 h-5" />
                    <span>Air conditioning</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img src={alarm} alt="icon" className="w-5 h-5" />
                    <span className="line-through">Carbon monoxide alarm</span>
                  </div>
                </div>
              </div>
              <Button
                variant={"ghost"}
                className="bg-muted w-full sm:w-max font-bold text-base py-6 px-6 my-4"
              >
                Show all 24 amenities
              </Button>
            </div>
            <div className="pt-8 ">
              <h1 className="font-bold text-xl">Select check-in date</h1>
              <p className="text-sm text-muted-foreground">
                Add your travel dates for exact pricing
              </p>
              <Calendar
                mode="single"
                defaultMonth={date}
                numberOfMonths={2}
                selected={date}
                onSelect={setDate}
                className="w-full my-5"
              />
              <div className=" flex items-center justify-between mx-5 pb-4">
                <LuKeyboard className="cursor-pointer text-xl" />
                <p className="cursor-pointer underline text-sm font-bold">
                  Clear dates
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex w-full">
            <div className="sticky top-32 w-full">
              <div className="border rounded-xl shadow-lg py-8 px-5 flex flex-col gap-4">
                <h2 className="font-semibold text-2xl">Add dates for prices</h2>
                <div className="grid grid-cols-2 grid-rows-2 border border-black rounded-xl">
                  <div className="p-4 border-r border-black flex items-start flex-col justify-center">
                    <p className="text-[10px] font-bold">CHECK-IN</p>
                    <p className="text-base">Add date</p>
                  </div>
                  <div className="p-4  flex items-start flex-col justify-center">
                    <p className="text-[10px] font-bold">CHECKOUT</p>
                    <p className="text-base">Add date</p>
                  </div>
                  <div className="p-4 border-t border-black col-span-2 flex items-center justify-between gap-3">
                    <div className="flex items-start flex-col justify-center">
                      <p className="text-[10px] font-bold">GUESTS</p>
                      <p className="text-base">1 guest</p>
                    </div>
                    <MdOutlineKeyboardArrowDown className="text-3xl" />
                  </div>
                </div>
                <Button className="w-full bg-pink-600 hover:bg-pink-700 rounded-full py-6 text-lg font-bold">
                  Check availability
                </Button>
              </div>
              <div className="flex items-center justify-center gap-6 text-muted-foreground font-bold mt-7">
                <ImFlag />
                <span className="underline">Report this listing</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center my-12">
            <div className="flex items-center gap-2">
              <img
                src={success1}
                alt="success image"
                className="w-10 sm:w-14"
              />
              <p className="w-min text-center font-bold text-6xl sm:text-8xl">
                {services?.rate}
              </p>
              <img
                src={success2}
                alt="success image"
                className="w-10 sm:w-14"
              />
            </div>
            <h1 className="font-bold text-2xl mt-8 mb-2">Guest favorite</h1>
            <p className="max-w-[350px] text-center text-muted-foreground">
              This home is in the
              <span className="font-bold text-black"> top 10%</span> of eligible
              listings based on ratings, reviews, and reliability
            </p>

            <div className="hidden w-full lg:grid grid-cols-7 gap-5 pt-14 pb-10 border-b">
              <div>
                <h3 className="font-bold text-sm">Overall rating</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">5</span>
                  <Progress value={85} className="w-full h-1" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">4</span>
                  <Progress value={10} className="w-full h-1" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">3</span>
                  <Progress value={2} className="w-full h-1" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">2</span>
                  <Progress value={0} className="w-full h-1" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">1</span>
                  <Progress value={0} className="w-full h-1" />
                </div>
              </div>

              <div className="border-l pl-5 flex flex-col justify-between pb-1">
                <div>
                  <h3 className="font-bold text-sm">Cleanliness</h3>
                  <h3 className="font-bold text-sm">4.9</h3>
                </div>

                <img src={c1} className="w-7 h-7 " alt="icon" />
              </div>
              <div className="border-l pl-5 flex flex-col justify-between pb-1">
                <div>
                  <h3 className="font-bold text-sm">Accuracy</h3>
                  <h3 className="font-bold text-sm">4.9</h3>
                </div>

                <img src={c2} className="w-7 h-7 " alt="icon" />
              </div>
              <div className="border-l pl-5 flex flex-col justify-between pb-1">
                <div>
                  <h3 className="font-bold text-sm">Check-in</h3>
                  <h3 className="font-bold text-sm">4.9</h3>
                </div>

                <img src={c3} className="w-7 h-7 " alt="icon" />
              </div>
              <div className="border-l pl-5 flex flex-col justify-between pb-1">
                <div>
                  <h3 className="font-bold text-sm">Communication</h3>
                  <h3 className="font-bold text-sm">4.9</h3>
                </div>

                <img src={c5} className="w-7 h-7 " alt="icon" />
              </div>
              <div className="border-l pl-5 flex flex-col justify-between pb-1">
                <div>
                  <h3 className="font-bold text-sm">Location</h3>
                  <h3 className="font-bold text-sm">4.9</h3>
                </div>

                <img src={c6} className="w-7 h-7 " alt="icon" />
              </div>
              <div className="border-l pl-5 flex flex-col justify-between pb-1">
                <div>
                  <h3 className="font-bold text-sm">Value</h3>
                  <h3 className="font-bold text-sm">4.9</h3>
                </div>

                <img src={c7} className="w-7 h-7 " alt="icon" />
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {reviewsData?.map((review: IReview, idx: number) => (
                <ReviewItemCard key={idx} review={review} />
              ))}
            </div>
            <div className="flex gap-5 items-center py-12 border-b flex-wrap">
              <Button
                variant={"ghost"}
                className="bg-muted w-full sm:w-max font-bold text-base py-6"
              >
                Show all 124 reviews
              </Button>
              <p className="text-sm mx-auto sm:mx-0 font-bold underline cursor-pointer text-muted-foreground">
                Learn how reviews work
              </p>
            </div>
          </div>
          {/* <div>
            <div className="pt-10 pb-16 border-b">
              <h1 className="font-bold text-xl">Where you'll sleep</h1>

              <p className="text-base font-semibold text-muted-foreground mt-5">
                {services?.author?.address}
              </p>
              <div className="w-full h-[470px] bg-muted mt-6"></div>
            </div>
          </div> */}
          {/* Meet Your Host */}
          <div>
            <div className="pt-10 pb-16 border-b">
              <h1 className="font-bold text-xl">Meet your host</h1>

              <div className="flex flex-col lg:flex-row gap-10 mt-6">
                <div className="w-max lg:w-1/3 ">
                  <div className="bg-white shadow-xl border p-5 flex rounded-2xl">
                    <div className="w-2/3 flex flex-col items-center justify-center">
                      <figure className="relative">
                        <img
                          src={
                            "https://i.ibb.co.com/Zz0PMNj/listening-applicant.jpg"
                          }
                          className="w-28 h-28 rounded-full bg-muted object-cover"
                          alt=""
                        />
                        <figure className="absolute bottom-0 right-0  w-8 h-8 bg-pink-600 flex rounded-full items-center justify-center">
                          <img src={d3} className="w-4 h-4" alt="icon" />
                        </figure>
                      </figure>
                      <h2 className="text-3xl font-bold mt-3">
                        {services?.author?.name}
                      </h2>
                      <div className="flex items-center gap-2">
                        <img src={d1} className="w-4 h-3" alt="" />
                        <p className="text-sm text-muted-foreground">
                          Superhost
                        </p>
                      </div>
                    </div>
                    <div className="w-1/3 py-3">
                      <div>
                        <p className="font-extrabold text-xl">
                          {services?.author?.reviews}
                        </p>
                        <span className="text-xs font-bold">Reviews</span>
                      </div>
                      <div className="py-3 border-y">
                        <p className="font-extrabold text-xl flex items-center gap-1">
                          {services?.author?.rating}{" "}
                          <FaStar className="text-sm" />
                        </p>
                        <span className="text-xs font-bold">Rating</span>
                      </div>
                      <div className="py-3">
                        <p className="font-extrabold text-xl">3</p>
                        <span className="text-xs font-bold">Years hosting</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-6">
                    <img src={d4} className="w-5 h-5" alt="" />
                    <p className="font-semibold">
                      Lives in {services?.author?.address}
                    </p>
                  </div>
                </div>
                <div className=" lg:w-2/3">
                  <h1 className="font-bold text-lg">
                    {services?.author?.name} is a Superhost
                  </h1>
                  <p className="font-medium mt-3 mb-8">
                    Superhosts are experienced, highly rated hosts who are
                    committed to providing great stays for guests.
                  </p>
                  <h1 className="font-bold text-lg mb-4">Host details</h1>
                  <p className="font-medium ">Response rate: 96%</p>
                  <p className="font-medium ">Responds within an hour</p>

                  <Button
                    variant={"ghost"}
                    className="bg-muted w-full sm:w-max py-6 font-bold text-base my-7"
                  >
                    Message host
                  </Button>
                  <div className="flex gap-3 items-center ">
                    <img src={d2} className="w-6 h-6" alt="" />
                    <p className="text-sm">
                      To help protect your payment, always use Airbnb to send
                      money and communicate with hosts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Things to know */}
          <div className="my-10">
            <h1 className="font-bold text-xl">Things to know</h1>
            <div className="grid gap-10 mt-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <div className="space-y-3">
                <h1 className="font-bold text-lg">House rules</h1>
                <p className="text-base font-semibold text-muted-foreground">
                  Check-in: 3:00PM - 11:00PM
                </p>
                <p className="text-base font-semibold text-muted-foreground">
                  Check-in: 3:00PM - 11:00PM
                </p>
                <p className="text-base font-semibold text-muted-foreground">
                  Check-in: 3:00PM - 11:00PM
                </p>
                <div className="cursor-pointer flex gap-1 items-center">
                  <p className="font-bold underline">Show more</p>
                  <IoIosArrowForward />
                </div>
              </div>
              <div className="space-y-3">
                <h1 className="font-bold text-lg">House rules</h1>
                <p className="text-base font-semibold text-muted-foreground">
                  Carbon monoxide alarm not reported
                </p>
                <p className="text-base font-semibold text-muted-foreground">
                  Smoke alarm
                </p>

                <div className="cursor-pointer flex gap-1 items-center">
                  <p className="font-bold underline">Show more</p>
                  <IoIosArrowForward />
                </div>
              </div>
              <div className="space-y-3">
                <h1 className="font-bold text-lg">House rules</h1>
                <p className="text-base font-semibold text-muted-foreground">
                  Add your trip dates to get the cancellation details for this
                  stay.
                </p>

                <div className="cursor-pointer flex gap-1 items-center">
                  <p className="font-bold underline">Add dates</p>
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <section className="w-full bg-[#FCFCFC] border-t border-muted">
        <footer className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-14">
            {/* Support */}
            <div className="space-y-3">
              <h1 className="font-bold">Support</h1>
              {supportLinks?.map((link: IFooterLink) => (
                <FooterLinkItem key={link.id} item={link} />
              ))}
            </div>
            {/* Hosting */}
            <div className="space-y-3">
              <h1 className="font-bold">Hosting</h1>
              {hostingLinks?.map((link: IFooterLink) => (
                <FooterLinkItem key={link.id} item={link} />
              ))}
            </div>
            {/* Airbnb */}
            <div className="space-y-3">
              <h1 className="font-bold">Airbnb</h1>
              {companyLinks?.map((link: IFooterLink) => (
                <FooterLinkItem key={link.id} item={link} />
              ))}
            </div>
          </div>
          <div className="flex lg:flex-row-reverse  flex-col gap-4 justify-between items-center py-7 border-t">
            <div className="w-full lg:w-auto flex items-center justify-between lg:justify-center gap-3 ">
              <div className="flex items-center justify-between gap-3 ">
                <h1 className="font-bold flex items-center justify-center gap-2 cursor-pointer">
                  <TbWorld className="text-lg" />
                  <span className="text-sm">English(US)</span>
                </h1>
                <h1 className="font-bold flex items-center justify-center gap-2 cursor-pointer">
                  <span className="text-sm">$</span>
                  <span className="text-sm">USD</span>
                </h1>
              </div>
              <div className="flex items-center justify-between lg:justify-center gap-3 ">
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  className="rounded-full cursor-pointer"
                >
                  <FaFacebook />
                </Button>
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  className="rounded-full cursor-pointer"
                >
                  <FaXTwitter />
                </Button>
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  className="rounded-full cursor-pointer"
                >
                  <FaInstagram />
                </Button>
              </div>
            </div>
            <div className="w-full sm:flex-row flex-col flex items-center justify-start gap-2 text-sm font-medium">
              <div className="w-full sm:w-auto flex items-center justify-start gap-2">
                <span>© 2025 Airbnb, Inc.</span>
                <span className="font-bold hidden sm:flex">·</span>
              </div>
              <div className="w-full sm:w-auto flex items-center justify-start gap-2">
                <Link to={"/"} className="hover:underline">
                  Terms
                </Link>
                <span className="font-bold">·</span>
                <Link to={"/"} className="hover:underline">
                  Sitemap
                </Link>
                <span className="font-bold">·</span>
                <Link to={"/"} className="hover:underline">
                  Privacy
                </Link>
                <span className="font-bold">·</span>
                <Link to={"/"} className="hover:underline">
                  Your Privacy Choices
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default ServiceDetails;
