import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  companyLinks,
  hostingLinks,
  locationsData,
  supportLinks,
  tipsData,
} from "@/constants/footerData";
import type { IFooterCard, IFooterLink } from "@/types";
import FooterTabCard from "../modules/Footer/footerTabCard";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import FooterLinkItem from "../modules/Footer/FooterLinkItem";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#FCFCFC] border-t border-muted mt-3">
      <div className="max-w-[1920px] mx-auto px-12 pt-12">
        <h1 className="text-2xl font-bold">Inspiration for future getaways</h1>
        <div className="my-3">
          <Tabs defaultValue="tips" className="w-full">
            <div className="w-full border-b">
              <TabsList className="bg-transparent p-0 gap-4 my-1">
                <TabsTrigger
                  value="tips"
                  className="bg-transparent font-semibold text-base shadow-none border-none p-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-black text-gray-500"
                >
                  Travel tips & inspiration
                </TabsTrigger>
                <TabsTrigger
                  value="apartments"
                  className="bg-transparent font-semibold text-base shadow-none border-none p-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none  data-[state=active]:text-black text-gray-500 "
                >
                  Airbnb-friendly apartments
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="tips" className="mt-4">
              <div className="grid grid-cols-6 gap-3 space-y-4">
                {tipsData?.map((tipsData: IFooterCard) => (
                  <FooterTabCard key={tipsData.id} item={tipsData} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="apartments" className="mt-4">
              <div className="grid grid-cols-6 gap-3 space-y-4">
                {locationsData?.map((location: IFooterCard) => (
                  <FooterTabCard key={location.id} item={location} />
                ))}
                <div>
                  <h1 className="font-bold text-sm flex">
                    <span className="hover:underline">See more</span>{" "}
                    <MdOutlineKeyboardArrowDown className="text-xl" />
                  </h1>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="grid grid-cols-3 gap-4 my-14">
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
        <div className="flex gap-4 justify-between items-center py-7 border-t">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <span>© 2025 Airbnb, Inc.</span>
            <span className="font-bold">·</span>
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
          <div className="flex items-center justify-center gap-3">
            <h1 className="font-bold flex items-center justify-center gap-2 cursor-pointer">
              <TbWorld className="text-lg" />
              <span className="text-sm">English(US)</span>
            </h1>
            <h1 className="font-bold flex items-center justify-center gap-2 cursor-pointer">
              <span className="text-sm">$</span>
              <span className="text-sm">USD</span>
            </h1>

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
      </div>
    </footer>
  );
};

export default Footer;
