import ServiceSectionCard from "@/components/modules/Service/ServiceSectionCard";

import { useGetAllServicesQuery } from "@/redux/features/service/service.api";
import type { IService } from "@/types";
import SkeletonHome from "./SkeletonHome";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const Home = () => {
  const { data, isLoading } = useGetAllServicesQuery(undefined);
  const services = data?.data?.data || [];
  if (isLoading) {
    return <SkeletonHome />;
  }

  console.log(services);
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <div className="mt-40 sm:mt-36 md:mt-52">
        <div className=" max-w-[1920px] mx-auto px-6 lg:px-12 sm:mt-8">
          {services?.map((serviceSection: IService) => {
            return (
              <ServiceSectionCard
                key={serviceSection.id}
                sectionService={serviceSection}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
