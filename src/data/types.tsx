// import { StaticImageData } from "next/image";




// export function cleanProductImages(images:string){
//   return images.replace(/[[\]\"\\]/g, "").split(',')
//   }

export function cleanProductImages(images: string) {
  if(Array.isArray(images)){
    return images
  }
  return images.replace(/[\[\]\"\\]/g, '').split(',');

  }

  // types.ts
export interface OrderItemType {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  taille: string | null;
  created_at: string;
  updated_at: string;
}

export interface OrderType {
  id: number;
  user_id: number;
  magazin_id: number | null;
  status: string;
  created_at: string;
  updated_at: string;
  items: OrderItemType[];
}



  
export type ProductType = {
  slug: string;
  title: string;
  category_name: string;
  category:CategorieType;
  images:  string;
  price: number;
  oldprice: number;
  magazin_name: string;
  rating: number;
  id: number
  pieces_sold: number;
  justIn: boolean;
  reviews:Review[]
};

export type Review = {
  id:number,
  commmenttitle:string,
  created_at:string
    content:string,
    rating:number,
    user:UserType
}
export type CartType = {
  id:number,
  totalPrice:number,
  cartTaxe:number,
  total:number
  cart_items:CartItemType[]
}

export type CartItemType = {
 id:number
  quantity:number,
  product:ProductType,
magazinas:magazinType,
}

type magazinType = {
 id:number,
 name:string,
 
}

export type Magazin = {
  id: number;
  name: string;
  Latitude: string;
  Longitude: string;
  image: string;
  owner_id: number;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  products: ProductType[];
};

export type PaginatedMagazins = {
  current_page: number;
  data: Magazin[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
      url: string | null;
      label: string;
      active: boolean;
  }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};

// {
//   "id": 1,
//   "user_id": 41,
//   "created_at": "2024-05-24T09:08:27.000000Z",
//   "updated_at": "2024-05-24T09:08:27.000000Z",
//   "cart_items": [
//       {
//           "id": 1,
//           "cart_id": 1,
//           "product_id": 14,
//           "quantity": 1,
//           "product": {
//               "id": 14,
//               "title": "Prof.",
//               "price": 283,
//               "image": "https:\/\/via.placeholder.com\/640x480.png\/004444?text=consequatur",
//               "magazin_id": 3,
//               "magazins": {
//                   "id": 3,
//                   "name": "tenetur"
//               }
//           }
//       },
 







export type UserType = {
  id:number,
  firstname:string
  lastname:string
  email:string
  tel:string
  city:string
  country:string
  state:string
  postalcode:string
  adresseType:string
  adresse:string
  role:string
}
export type MagazinType = {
  id : number ,
  name : string
}


export type CategorieType = {
  id:number ,
  name:string

}


export type fetchProductType = {
  result: number,
  data: ProductType[],
  current_page: number,
  last_page: number,
  min_price:number, 
  max_price :number
}
export type BlogData = {
  sectionOne: {
    title: string;
    paragraph1: string;
    points: string[];
    paragraph2: string;
  };
  sectionTwo: {
    title: string;
    description: string;
    midImage: string;
  };
  sectionThree: {
    title: string;
    description: string;
  };
  sectionFour: {
    title: string;
    description: string;
    points: string[];
  };
  quote: string;
  sectionFive: {
    title: string;
    description: string;
  }[];
};

export type BlogType = {
  title: string;
  brief: string;
  date: string;
  coverImage: string;
  blogData: BlogData;
  tag: 'Style' | 'Fitting' | 'General';
  slug: string;
};
