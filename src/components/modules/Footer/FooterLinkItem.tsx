import type { IFooterLink } from "@/types";
import { Link } from "react-router";

const FooterLinkItem = ({ item }: { item: IFooterLink }) => {
  return (
    <div className="text-[15px] cursor-pointer">
      <Link to={item.link} className="hover:underline">
        {item.title}
      </Link>
    </div>
  );
};

export default FooterLinkItem;
