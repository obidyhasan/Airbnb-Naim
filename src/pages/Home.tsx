import ServiceSectionCard from "@/components/modules/Service/ServiceSectionCard";

import { useGetAllServicesQuery } from "@/redux/features/service/service.api";
import type { IService } from "@/types";

const Home = () => {
  const { data, isLoading } = useGetAllServicesQuery(undefined);
  const services = data?.data?.data || [];
  if (isLoading) return;

  console.log(services);
  return (
    <div className="max-w-[1920px] mx-auto px-6 lg:px-12 sm:mt-8">
      {services?.map((serviceSection: IService) => {
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
