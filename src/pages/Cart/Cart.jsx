import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const items = useSelector((state) => state.cart.cartItems)
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className='section-gap section-gap-bottom'>
            <div className="container">

                <h1 className="mb-6 text-2xl font-bold text-gray-900">Shopping Cart</h1>

                {items.length === 0 ? (
                    <div className="rounded-xl bg-white py-16 text-center shadow">
                        <p className="text-lg font-semibold text-gray-500">আপনার Cart খালি</p>
                    </div>
                ) : (
                    <div className="overflow-hidden  bg-white shadow">

                        {/* Table Head (শুধু বড় স্ক্রিনে) */}
                        <div className="hidden grid-cols-12 gap-4 border border-gray-200 bg-blue-50 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 md:grid">
                            <div className="col-span-4">Product</div>
                            <div className="col-span-2 text-center">Qty</div>
                            <div className="col-span-2 text-right">Price</div>
                            <div className="col-span-2 text-right">Subtotal</div>
                            <div className="col-span-2 text-right">Remove</div>
                        </div>

                        {/* Items */}
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-12 items-center gap-4 border-b border-gray-100 px-4 py-3 md:px-6"
                            >
                                {/* Image + Name */}
                                <div className="col-span-12 flex items-center gap-4 md:col-span-4">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-16 w-16 object-cover md:h-16 md:w-16"
                                    />
                                    <h3 className="line-clamp-2 text-sm font-semibold text-gray-900 md:text-base">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Qty */}
                                <div className="col-span-4 text-center md:col-span-2">
                                    <span className="inline-block min-w-8  bg-blue-50 px-3 py-1 text-sm font-semibold text-gray-800">
                                        {item.quantity}
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="col-span-4 text-right text-sm text-gray-600 md:col-span-2 md:text-base">
                                    ${item.price}
                                </div>

                                {/* Subtotal */}
                                <div className="col-span-4 text-right text-sm font-bold text-gray-900 md:col-span-2 md:text-base">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>

                                {/* Delete */}
                                <div className="col-span-2 text-right text-sm font-bold text-gray-900 md:col-span-2 md:text-base">
                                    <button
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                        className="text-sm font-semibold text-red-500 hover:underline"
                                        aria-label={`${item.title} মুছুন`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5"
                                        >
                                            <polyline points="3 6 5 6 21 6" />
                                            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                            <path d="M10 11v6" />
                                            <path d="M14 11v6" />
                                            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Total */}
                        <div className="grid grid-cols-12 items-center gap-4 bg-gray-50 px-4 py-4 md:px-6">

                            {/* লেখা: Cart Total */}
                            <span className="col-span-6 text-left text-xl font-bold text-black-900 md:col-span-9">
                                Cart Total
                            </span>

                            {/* মোট দাম: Subtotal কলামের ঠিক নিচে */}
                            <span className="col-span-6 text-left text-xl font-bold text-orange-600 md:col-span-2 md:text-2xl">
                                ${total.toFixed(2)}
                            </span>

                            {/* Remove কলামের নিচের ফাঁকা জায়গা */}
                            <span className="hidden md:col-span-1 md:block"></span>

                        </div>

                    </div>
                )}

            </div>
        </div>
    )
}

export default Cart