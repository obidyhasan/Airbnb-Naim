import type { IFooterLink } from "@/types";
import { FaFacebook } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import {
  companyLinks,
  hostingLinks,
  supportLinks,
} from "@/constants/footerData";
import FooterLinkItem from "@/components/modules/Footer/FooterLinkItem";
import { Button } from "../ui/button";
import { Link } from "react-router";

const DetailsServiceFooter = () => {
  return (
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
  );
};

export default DetailsServiceFooter;
