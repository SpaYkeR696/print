export interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
  category?: string;
  description?: string;
  sizes?: string[];
  colors?: string[];
}

export interface Category {
  id: string;
  name: string;
}
