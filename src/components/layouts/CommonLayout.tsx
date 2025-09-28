import { useEffect, useState, type ReactNode } from "react";

import { GrFavorite } from "react-icons/gr";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CgSearch } from "react-icons/cg";

interface IProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: IProps) => {
  const [showBottom, setShowBottom] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // scrolling up
        setShowBottom(true);
      } else {
        // scrolling down
        setShowBottom(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" min-h-screen flex flex-col relative">
      <div className="grow-1">{children}</div>
      {/* Bottom Section (only visible at top) */}
      {showBottom && (
        <div className="fixed bottom-0 w-full bg-white p-3 md:hidden flex items-center justify-center gap-16 border-t transition-all duration-300">
          <div className="text-pink-600 flex items-center justify-center flex-col">
            <CgSearch className="text-2xl" />
            <h1 className="text-xs font-semibold">Explore</h1>
          </div>
          <div className="text-muted-foreground flex items-center justify-center flex-col">
            <GrFavorite className="text-xl" />
            <h1 className="text-xs font-semibold">Favorite</h1>
          </div>
          <div className="text-muted-foreground flex items-center justify-center flex-col">
            <HiOutlineUserCircle className="text-2xl" />
            <h1 className="text-xs font-semibold">Log in</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommonLayout;
