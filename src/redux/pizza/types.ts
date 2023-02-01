export type SearchPizzaParams = {
   currentPage: string; category: string; search: string; sortBy: string; order: string;
 }

export type Pizza = {
   title: string;
   price: number;
   imageUrl: string;
   sizes: number[];
   types: number[];
   category: number;
   rating: number;
   id: string; 
 }
 
 export enum Status {
   LOADING = 'loading',
   SUCCESS = 'success',
   ERROR = 'error'
 }
 
export interface PizzaSliceState {
   items: Pizza[];
   status: Status
 }