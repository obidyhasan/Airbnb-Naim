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

const ServiceDetails = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="max-w-6xl mx-auto px-6 my-10">
      <section>
        {/* title */}
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">
            Japanese themed studio KLCC area
          </h1>
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
          <div className="grid gap-3 grid-cols-4">
            <figure className="col-span-2 row-span-2 w-full h-full">
              <img
                src=""
                alt="room image"
                className="bg-muted w-full h-full object-cover"
              />
            </figure>
            <figure className="h-60">
              <img
                src=""
                alt="room image"
                className="bg-muted w-full h-full object-cover"
              />
            </figure>
            <figure className="h-60">
              <img
                src=""
                alt="room image"
                className="bg-muted w-full h-full object-cover"
              />
            </figure>
            <figure className="h-60">
              <img
                src=""
                alt="room image"
                className="bg-muted w-full h-full object-cover"
              />
            </figure>
            <figure className="h-60">
              <img
                src=""
                alt="room image"
                className="bg-muted w-full h-full object-cover"
              />
            </figure>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10 border-b pb-10">
          <div className="col-span-2 ">
            <div>
              <h2 className="font-semibold text-2xl">
                Entire rental unit in Kuala Lumpur, Malaysia
              </h2>
              <p>3 guests · 1 bedroom · 1 bed · 1 bath</p>
            </div>
            <div className="border rounded-2xl p-5 my-6 flex gap-4 items-center">
              <div className="flex items-center gap-2">
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
                <div className="text-center border-r px-5">
                  <p className="font-bold text-xl">4.87</p>
                  <div className="flex items-center justify-center gap-0.5">
                    <IoStar className="w-3" />
                    <IoStar className="w-3" />
                    <IoStar className="w-3" />
                    <IoStar className="w-3" />
                    <IoStar className="w-3" />
                  </div>
                </div>
                <div className="text-center px-5">
                  <p className="font-bold text-xl">124</p>
                  <p className="text-sm font-bold">Reviews</p>
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-center pt-2 pb-5 border-b">
              <figure>
                <img
                  src=""
                  alt=""
                  className="w-10 h-10 object-cover rounded-full bg-muted"
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
                  <img src="" alt="" className="w-7 h-7" />
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
                  <img src="" alt="" className="w-7 h-7" />
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
                  <img src="" alt="" className="w-7 h-7" />
                </figure>
                <div>
                  <h1 className="font-semibold">Self check-in</h1>
                  <p className="text-sm text-muted-foreground">
                    Check yourself in with the lockbox.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-xl p-4 my-7">
              <p>
                Some info has been automatically translated.
                <span className="font-bold underline">Show original</span>
              </p>
            </div>
            <div className="border-b pb-6">
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
                className="bg-muted font-bold text-base py-6 px-6 my-4"
              >
                Show more
              </Button>
            </div>
            <div className="py-8 border-b">
              <h1 className="font-bold text-xl">Where you'll sleep</h1>
              <img
                src=""
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
                    <img src="" alt="" className="w-7 h-7 bg-muted" />
                    <span>Kitchen</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img src="" alt="" className="w-7 h-7 bg-muted" />
                    <span>Dedicated workspace</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img src="" alt="" className="w-7 h-7 bg-muted" />
                    <span>TV</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img src="" alt="" className="w-7 h-7 bg-muted" />
                    <span>Washer</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img src="" alt="" className="w-7 h-7 bg-muted" />
                    <span>Hair dryer</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 items-center">
                    <img src="" alt="" className="w-7 h-7 bg-muted" />
                    <span>Fast wifi - 329 Mbps</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img src="" alt="" className="w-7 h-7 bg-muted" />
                    <span>Pool</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img src="" alt="" className="w-7 h-7 bg-muted" />
                    <span>Elevator</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img src="" alt="" className="w-7 h-7 bg-muted" />
                    <span>Air conditioning</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <img src="" alt="" className="w-7 h-7 bg-muted" />
                    <span className="">Carbon monoxide alarm</span>
                  </div>
                </div>
              </div>
              <Button
                variant={"ghost"}
                className="bg-muted font-bold text-base py-6 px-6 my-4"
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
          <div className="relative">
            <div className="sticky top-32 ">
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
      </section>
    </div>
  );
};

export default ServiceDetails;
