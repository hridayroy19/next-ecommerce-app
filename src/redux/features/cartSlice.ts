import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


export interface Cartproduct extends IProduct {
    orderQuantity: number
}

interface InitialState {
    products: Cartproduct[]
    city: string;
    shippingAddress: string;
}

const initialState: InitialState = {
    products: [],
    city: "",
    shippingAddress: ""
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const productToAdd = state.products.find((product) => product._id === action.payload._id)

            if (productToAdd) {
                productToAdd.orderQuantity += 1;
                return
            }
            state.products.push({ ...action.payload, orderQuantity: 1 })
        },

        incrementOrderQuantity: (state, action) => {
            const productToIncrement = state.products.find((product) => product._id === action.payload)
            if (productToIncrement) {
                productToIncrement.orderQuantity += 1
                return
            }
        },

        DecrementOrderQuantity: (state, action) => {
            const productTDeccrement = state.products.find((product) => product._id === action.payload)

            if (productTDeccrement && productTDeccrement.orderQuantity > 1) {
                productTDeccrement.orderQuantity -= 1
                return
            }
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((product) => product._id !== action.payload)
        },
        updateCity: (state, action) => {
            state.city = action.payload;
          },
          updateShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
          },
    }
})

export const orderedProductsSelector = (state: RootState) => {
    return state.cartSlice.products;
};

// payment 
export const subTotalSelector = (state: RootState) => {
    return state.cartSlice.products.reduce((acc, product) => {
        if (product.offerPrice) {
            // console.log(product.offerPrice);
            return acc + product.offerPrice * product.orderQuantity;
        } else {
            // console.log(product.price, "Price");
            return acc + product.price * product.orderQuantity;
        }
    }, 0);
};


//* Address

export const citySelector = (state: RootState) => {
    return state.cartSlice.city;
  };
  
  export const shippingAddressSelector = (state: RootState) => {
    return state.cartSlice.shippingAddress;
  };





export const { addProduct, incrementOrderQuantity, DecrementOrderQuantity, removeProduct,updateCity , updateShippingAddress  } = cartSlice.actions;
export default cartSlice.reducer;