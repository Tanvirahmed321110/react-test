import React from 'react'

function OfferEmpty() {
    return (
        <div class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-20 text-center">
            <div class="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-4xl">
                🕒
            </div>
            <h2 class="mt-6 text-xl font-semibold text-gray-800">
                এখন কোনো Happy Hours offer নেই
            </h2>
            <p class="mt-2 max-w-sm text-gray-500">
                নতুন offer শুরু হলে এখানেই সবার আগে দেখতে পাবেন। ততক্ষণ আমাদের সব পণ্য ঘুরে দেখুন।
            </p>
            <a href="/products" class="mt-6 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-700">
                সব পণ্য দেখুন
            </a>
        </div>
    )
}

export default OfferEmpty
