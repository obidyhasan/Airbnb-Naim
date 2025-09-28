import type { IServiceCard } from "@/types";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import wishlistIcon from "@/assets/icon/wishlist.svg";

// basis-1/2 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/7
const ServiceItemCard = ({ service }: { service: IServiceCard }) => {
  return (
    <div className="my-4">
      <Link to={`/rooms/${service?.serviceId}`}>
        <figure className="w-full h-[160px]  md:h-[160px] lg:h-[180px] xl:h-[180px] 2xl:h-[240px] relative">
          <img
            src={service.images[0]}
            alt="service image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute top-3 px-2 w-full flex items-center justify-between">
            {service.isGuestFavorite ? (
              <div className="bg-gray-50 rounded-full px-3 py-1 flex items-center justify-center">
                <span className="text-xs font-bold">Guest favorite</span>
              </div>
            ) : (
              <span></span>
            )}
            <div>
              <img className="w-6" src={wishlistIcon} alt="wishlist" />
            </div>
          </div>
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
