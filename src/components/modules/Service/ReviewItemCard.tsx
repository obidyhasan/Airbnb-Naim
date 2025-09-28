import type { IReview } from "@/types";
import { IoStar } from "react-icons/io5";

const ReviewItemCard = ({ review }: { review: IReview }) => {
  return (
    <div>
      <div className="flex items-center  gap-4">
        <img
          src={review?.authorImage}
          className="w-12 h-12 bg-muted object-cover rounded-full"
          alt="author image"
        />
        <div>
          <h1 className="font-bold">{review?.author}</h1>
          <p className="text-sm">{review?.airbnbTenure}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 mt-3 mb-1">
        <div className="flex gap-0.5">
          <IoStar className="w-2.5" />
          <IoStar className="w-2.5" />
          <IoStar className="w-2.5" />
          <IoStar className="w-2.5" />
          <IoStar className="w-2.5" />
        </div>
        <p className="text-sm font-bold">· {review?.reviewDate}</p>
      </div>
      <p className="line-clamp-3">
        {review?.reviewText}
        <span> ...</span>
      </p>
      <p className="font-bold underline mt-2 cursor-pointer">Show more</p>
    </div>
  );
};

export default ReviewItemCard;
