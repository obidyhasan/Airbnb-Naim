import type { IServiceCard } from "@/types";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const ServiceItemCard = ({ service }: { service: IServiceCard }) => {
  return (
    <div className="my-4">
      <Link to={"/"}>
        <figure className="w-full h-[220px] ">
          <img
            src={service.images[0]}
            alt="service image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </figure>
        <div className="p-2">
          <h1 className="font-bold text-sm">{service.name}</h1>
          <div className="text-xs flex items-center gap-1 text-gray-600">
            <span>{service.price}</span>
            <span className="font-medium text-lg">·</span>
            <span className="flex items-center gap-0.5">
              <FaStar className="text-[8px]" /> {service.rate}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceItemCard;
