export interface IFooterCard {
  id: number;
  title: string;
  description: string;
}
export interface IFooterLink {
  id: number;
  title: string;
  link: string;
}

export interface IServiceCard {
  serviceId: number;
  name: string;
  price: string;
  rate: string;
  isGuestFavorite: boolean;
  images: string[];
  author: IAuthor;
  city: string;
  endDate: string;
  guestAvailable: boolean;
  startDate: string;
}
export interface IAuthor {
  address: string;
  name: string;
  rating: string;
  reviews: number;
  yearofservices: string;
}
export interface IService {
  id: number;
  title: string;
  services: IServiceCard[];
}

export interface IReview {
  author: string;
  authorImage: string;
  airbnbTenure: string;
  reviewDate: string;
  reviewText: string;
}
