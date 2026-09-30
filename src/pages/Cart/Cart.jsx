import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Cart() {
    const items = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()

    // total
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className='section-gap'>
            <div className="container">
                <div>
                    <h2 className='font-bold'>Cart Total: {total}</h2>
                </div>
            </div>
        </div>
    )
}

export default Cart
