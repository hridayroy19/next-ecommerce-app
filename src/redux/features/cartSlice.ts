import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


export interface Cartproduct extends IProduct {
    orderQuantity: number
}

interface InitialState {
    products: Cartproduct[]
}

const initialState: InitialState = {
    products: []
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
        }
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


export const { addProduct, incrementOrderQuantity, DecrementOrderQuantity, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;