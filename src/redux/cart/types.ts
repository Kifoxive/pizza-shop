export type CartItem = {
   id: string;
   title: string;
   imageUrl: string;
   type: string;
   size: number;
   price: number;
   count: number;
 }

export interface CartSliceState {
   totalPrice: number;
   items: CartItem[]
 }