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
}
export interface IService {
  id: number;
  title: string;
  services: IServiceCard[];
}
