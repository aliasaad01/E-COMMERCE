import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add To Cart
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      // Add To Local Storage
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    // Remove From Cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);

      //Remove From Local Storage
      const previousCart = JSON.parse(localStorage.getItem("cartItems"));

      const updateCart = previousCart.filter((item) => {
        return action.payload.id !== item.id;
      });

      localStorage.setItem("cartItems", JSON.stringify(updateCart));
    },

    // Update In Cart
    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }

      // Update Local Stogare
      const previousCart = JSON.parse(localStorage.getItem("cartItems"));

      const updateCart = previousCart.map((item) => {
        return item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item;
      });

      localStorage.setItem("cartItems", JSON.stringify(updateCart));
    },

    // Stored Items From Local Storage
    storedItemsFromLocal: (state, action) => {
      state.items = action.payload;
    },

    // Show Items Count
    showItemsCount: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  storedItemsFromLocal,
  showItemsCount,
} = cartSlice.actions;
export default cartSlice.reducer;
