import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonHome() {
  return (
    <div>
      {/* Top Navigation Bar Skeleton */}
      <nav className="sticky top-0 z-50 bg-white">
        <div className=" w-full mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between items-center h-16 relative">
            {/* Logo */}
            <Skeleton className="h-6 w-24" />

            {/* Nav Links/Categories */}
            <div className="hidden md:flex space-x-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Skeleton className="h-6 w-20" /> {/* Homes */}
              <Skeleton className="h-6 w-24" /> {/* Experiences */}
              <Skeleton className="h-6 w-20" /> {/* Services */}
            </div>

            {/* Right Side Menu */}
            <div className="flex items-center space-x-4">
              <Skeleton className="h-6 w-28 hidden lg:block" />{" "}
              {/* Become a host */}
              <Skeleton className="h-8 w-8 rounded-full" /> {/* Globe icon */}
              <Skeleton className="h-8 w-8 rounded-full" /> {/* User menu */}
            </div>
          </div>
        </div>
      </nav>

      {/* Search Bar Section Skeleton */}
      <div className="py-6 border-b hidden md:flex">
        <div className="max-w-3xl border rounded-full mx-auto flex gap-4 items-center bg-white py-3 px-6">
          <div className="flex-grow">
            <Skeleton className="h-4 w-32 mb-1" /> {/* Where */}
            <Skeleton className="h-3 w-48" /> {/* Search destinations */}
          </div>
          <div className=" pl-3 flex-grow">
            <Skeleton className="h-4 w-24 mb-1" /> {/* Check in */}
            <Skeleton className="h-3 w-28" /> {/* Add dates */}
          </div>
          <div className=" pl-3 flex-grow">
            <Skeleton className="h-4 w-24 mb-1" /> {/* Check out */}
            <Skeleton className="h-3 w-28" /> {/* Add dates */}
          </div>
          <div className="flex-grow">
            <Skeleton className="h-4 w-32 mb-1" /> {/* Where */}
            <Skeleton className="h-3 w-48" /> {/* Search destinations */}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Popular Homes Section */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <Skeleton className="h-8 w-72" />{" "}
            {/* "Popular homes in Kuala Lumpur" */}
            <div className="flex gap-2">
              <Skeleton className="h-8 w-8 rounded-full" /> {/* Left arrow */}
              <Skeleton className="h-8 w-8 rounded-full" /> {/* Right arrow */}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <ListingCardSkeleton key={i} />
            ))}
          </div>
        </div>

        {/* Available next month Section */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <Skeleton className="h-8 w-72" />{" "}
            {/* "Available next month in Bangkok" */}
            <div className="flex gap-2">
              <Skeleton className="h-8 w-8 rounded-full" /> {/* Left arrow */}
              <Skeleton className="h-8 w-8 rounded-full" /> {/* Right arrow */}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <ListingCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Listing Card Skeleton Component
function ListingCardSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-48 w-full rounded-lg" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}

export default SkeletonHome;
