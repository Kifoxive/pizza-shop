import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Pizza, PizzaSliceState, Status } from "./types"
import { fetchPizzas } from './asyncActions';

const initialState = {
  items: [],
  status: Status.LOADING
} as PizzaSliceState

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
      builder.addCase(fetchPizzas.pending, (state) => {
        state.status = Status.LOADING
      })
      builder.addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = Status.SUCCESS
        state.items = action.payload
      })
      builder.addCase(fetchPizzas.rejected, (state) => {
        state.status = Status.ERROR
        state.items = []
      })
  }
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer