import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = {
        id: Date.now(),
        ...action.payload,
      };
      state.products.push(newProduct);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      const { id, name, description, price, available } = action.payload;
      const product = state.products.find((product) => product.id === id);
      if (product) {
        product.name = name;
        product.description = description;
        product.price = price;
        product.available = available;
      }
    },
    toggleAvailability: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.available = !product.available;
      }
    },
  },
});

export const { addProduct, deleteProduct, updateProduct, toggleAvailability } =
  productSlice.actions;
export default productSlice.reducer;