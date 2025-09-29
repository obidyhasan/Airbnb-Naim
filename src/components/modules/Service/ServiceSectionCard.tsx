import type { IService } from "@/types";
import { IoIosArrowForward } from "react-icons/io";
import ServiceItemCard from "./ServiceItemCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ServiceSectionCard = ({
  sectionService,
}: {
  sectionService: IService;
}) => {
  return (
    <div className="">
      <Carousel className="relative">
        <h1 className="text-xl font-bold flex items-center justify-start mr-16">
          {sectionService.title}
          <IoIosArrowForward className="text-base sm:flex hidden" />
        </h1>
        <div className="absolute top-3 right-0 flex gap-1">
          <CarouselPrevious className="static h-6 w-6 rounded-full bg-white " />
          <CarouselNext className="static h-6 w-6 rounded-full bg-white " />
        </div>

        <CarouselContent className="-ml-4">
          {sectionService?.services?.map((service) => (
            <CarouselItem
              key={service.serviceId}
              className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/7"
            >
              <ServiceItemCard service={service} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ServiceSectionCard;
