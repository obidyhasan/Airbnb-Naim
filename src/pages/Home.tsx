import ServiceSectionCard from "@/components/modules/Service/ServiceSectionCard";
import { servicesData } from "@/constants/serviceData";
import type { IService } from "@/types";

const Home = () => {
  return (
    <div className="max-w-[1920px] mx-auto px-6 lg:px-12 sm:mt-8">
      {servicesData?.map((serviceSection: IService) => {
        return (
          <ServiceSectionCard
            key={serviceSection.id}
            sectionService={serviceSection}
          />
        );
      })}
    </div>
  );
};

export default Home;
