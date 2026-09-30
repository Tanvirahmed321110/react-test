import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart")) || []

const cartSlice = createSlice({
    name: "cart",
    initialState: { cartItems: savedCart },
    reducers: {
        // Add product to cart
        addToCart: (state, action) => {
            const item = action.payload
            const exist = state.cartItems.find((i) => i.id === item.id)

            if (exist) {
                exist.quantity += 1;
            }
            else {
                state.cartItems.push({ ...item, quantity: 1 })
            }
        }

    }
})

export const selectCartItems = (state) => state.cart.cartItems

// for total item/badge
export const selectCartCount = (state) =>
    state.cart.cartItems.reduce((sum, item) => sum + item.quantity, 0)

// for total
export const selectCartTotal = (state) =>
    state.cart.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer