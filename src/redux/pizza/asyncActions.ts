import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { Pizza, SearchPizzaParams } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
   "pizza/fetchPizzasStatus",
   async ({ currentPage, category, search, sortBy, order }) => {
     const { data } = await axios.get<Pizza[]>(
       `https://636a867ab10125b78fde1e61.mockapi.io/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
     )
     return data
   }
 )