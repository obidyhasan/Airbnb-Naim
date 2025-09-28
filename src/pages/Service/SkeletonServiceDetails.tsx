import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export function SkeletonServiceDetails() {
  return (
    <div>
      {/* Navbar Skeleton */}
      <nav className="border-b sticky top-0 z-50 bg-white hidden md:flex">
        <div className="w-full">
          <div className="max-w-6xl mx-auto px-6 md:px-8 md:flex justify-between items-center gap-5 ">
            <Skeleton className="h-8 w-24 hidden lg:flex" />
            <Skeleton className="h-8 w-8 lg:hidden" />
            <Skeleton className="h-12 w-96 rounded-full" />
            <div className="flex items-center gap-4 my-6">
              <Skeleton className="h-8 w-24 rounded-full hidden lg:flex" />
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>
          </div>
        </div>
      </nav>

      <section className="relative my-6 max-w-6xl mx-auto px-6 md:px-8">
        {/* Title and Action Buttons Skeleton */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-64 hidden md:flex" />
          <div className="text-sm flex items-center gap-2">
            <Button
              variant={"ghost"}
              className="flex items-center gap-2 font-semibold underline"
            >
              <Skeleton className="h-4 w-12" />
            </Button>
            <Button
              variant={"ghost"}
              className="flex items-center gap-2 font-semibold underline"
            >
              <Skeleton className="h-4 w-12" />
            </Button>
          </div>
        </div>

        {/* Image Gallery Skeleton */}
        <div className="mt-5 mb-8">
          <Skeleton className="md:hidden w-full h-[300px] object-cover rounded-xl" />
          <div className="md:grid gap-3 grid-cols-4 relative hidden">
            <Skeleton className="col-span-2 row-span-2 w-full h-[400px] rounded-bl-xl rounded-tl-xl" />
            <Skeleton className="h-[190px]" />
            <Skeleton className="h-[190px] rounded-tr-xl" />
            <Skeleton className="h-[190px]" />
            <Skeleton className="h-[190px] rounded-br-xl" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10 pb-10">
          {/* Main Content Column Skeleton */}
          <div className="col-span-3 lg:col-span-2">
            <div>
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-4 w-60" />
            </div>

            {/* Guest Favorite Section Skeleton */}
            <div className="border rounded-2xl py-4 px-2 sm:p-5 my-6 flex gap-2 sm:gap-4 justify-between lg:justify-center items-center">
              <div className="flex items-center gap-1 sm:gap-2 grow lg:grow-0 justify-center">
                <Skeleton className="h-6 w-6" />
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-6 w-6" />
              </div>
              <Skeleton className="flex-1 h-4 w-64 hidden lg:flex" />
              <div className="flex">
                <div className="text-center border-r px-2 sm:px-5 flex items-center justify-center flex-col gap-2">
                  <Skeleton className="h-6 w-8" />
                  <div className="flex items-center justify-center gap-1">
                    <Skeleton className="h-3 w-3 rounded-full" />
                    <Skeleton className="h-3 w-3 rounded-full" />
                    <Skeleton className="h-3 w-3 rounded-full" />
                    <Skeleton className="h-3 w-3 rounded-full" />
                    <Skeleton className="h-3 w-3 rounded-full" />
                  </div>
                </div>
                <div className="text-center px-2 sm:px-5 space-y-2 ">
                  <Skeleton className="h-6 w-8 mx-auto" />
                  <Skeleton className="h-4 w-12 mx-auto" />
                </div>
              </div>
            </div>

            {/* Hosted By Section Skeleton */}
            <div className="flex gap-5 items-center pt-2 pb-5 border-b">
              <figure className="relative">
                <Skeleton className="w-10 h-10 rounded-full" />
              </figure>
              <div>
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-48 mt-3" />
              </div>
            </div>

            {/* Key Features Skeleton */}
            <div className="py-7 flex flex-col gap-5 ">
              <div className="flex gap-5">
                <Skeleton className="w-7 h-7" />
                <div>
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-4 w-64 mt-3" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 lg:col-span-1">
            <div className="border rounded-2xl">
              <div className="p-4 ">
                <Skeleton className="h-4 w-20 mb-4" />
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="mb-4">
                  <Skeleton className="h-10 w-full" />
                </div>
                <Skeleton className="h-6 w-40" />
              </div>
            </div>
            <div className="mt-8 ">
              <Skeleton className="h-6 w-28 mx-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
