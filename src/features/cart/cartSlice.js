import { createSlice } from "@reduxjs/toolkit";

let savedItems = [];
try {
  savedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
} catch (e) {
  console.error("Failed to load cartItems from locatStorage", e);
}

const initialState = {
  items: savedItems,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add To Cart
    addToCart: (state, action) => {
      const existingItem = state.items?.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // state.items.push({ ...action.payload, quantity: 1 });
        console.log("add to cart payload", { ...action.payload, quantity: 1 });
        state.items = [...state.items, { ...action.payload, quantity: 1 }];
      }
    },

    // Remove From Cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    // Update In Cart
    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      console.log(item);
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
