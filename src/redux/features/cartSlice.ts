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
        clearCart: (state) => {
            state.products = [];
            state.city = "";
            state.shippingAddress = "";
          },
    }
})

// products
export const orderedProductsSelector = (state: RootState) => {
    return state.cartSlice.products;
};

export const orderSelect = (state: RootState) => {
    return {
        products: state.cartSlice.products.map((product) => ({
            product: product._id, quantity: product.orderQuantity,
            color: "White",
        })),

        shippingAddress: `${state.cartSlice.shippingAddress} - ${state.cartSlice.city}`,
        paymentMethod: "Online",
    }
}
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
export const shippingCostSelector = (state: RootState) => {
    if (
        state.cartSlice.city &&
        state.cartSlice.city === "Dhaka" &&
        state.cartSlice.products.length > 0
    ) {
        return 60;
    } else if (
        state.cartSlice.city &&
        state.cartSlice.city !== "Dhaka" &&
        state.cartSlice.products.length > 0
    ) {
        return 120;
    } else {
        return 0;
    }
};

export const grandTotalSelector = (state: RootState) => {
    const subTotal = subTotalSelector(state);
    const shippingCost = shippingCostSelector(state);

    return subTotal + shippingCost;
};
//* Address

export const citySelector = (state: RootState) => {
    return state.cartSlice.city;
};

export const shippingAddressSelector = (state: RootState) => {
    return state.cartSlice.shippingAddress;
};





export const { addProduct, incrementOrderQuantity, DecrementOrderQuantity, removeProduct, updateCity, updateShippingAddress,clearCart } = cartSlice.actions;
export default cartSlice.reducer;