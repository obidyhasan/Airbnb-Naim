import type { IFooterCard } from "@/types";

const FooterTabCard = ({ item }: { item: IFooterCard }) => {
  return (
    <div className="text-sm cursor-pointer">
      <h1 className="font-bold">{item.title}</h1>
      <h1 className="text-gray-500 hover:text-black">{item.description}</h1>
    </div>
  );
};

export default FooterTabCard;
