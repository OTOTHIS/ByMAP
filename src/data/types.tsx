
export type ProductType = {
  slug: string;
  title: string;
  category_name: string;
  category:CategorieType;
  image:  string;
  price: number;
  oldprice: number;
  magazin_name: string;
  rating: number;
  id: number
  pieces_sold: number;
  justIn: boolean;
  reviews:[
    {
      content:string,
      rating:number
    }
  ]
};

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
 name:string
}

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
  last_page: number
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
