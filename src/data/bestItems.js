const bestItems = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
        title: "Nike Air Runner",
        tag: "Best Seller",
        offer: "25% OFF",

        category: "Running",
        brand: "Nike",
        price: 89.99,
        oldPrice: 119.99,
        rating: 4.8,
        reviews: 245,
        stock: 18,

        description: "Lightweight running sneaker with premium cushioning and breathable mesh.",
    },

    {
        id: 2,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
        title: "Urban Street Sneaker",
        tag: "Popular",
        offer: "15% OFF",

        category: "Lifestyle",
        brand: "Adidas",
        price: 76.5,
        oldPrice: 90,
        rating: 4.6,
        reviews: 189,
        stock: 24,

        description: "Modern everyday sneaker designed for comfort and urban styling.",
    },

    {
        id: 3,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
        title: "Performance Pro",
        tag: "Trending",
        offer: "30% OFF",

        category: "Training",
        brand: "Puma",
        price: 69.99,
        oldPrice: 99.99,
        rating: 4.7,
        reviews: 317,
        stock: 12,

        description: "High-performance training shoe with durable grip and responsive cushioning.",
    },

    {
        id: 4,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
        title: "Classic Black Edition",
        tag: "Featured",
        offer: "20% OFF",

        category: "Casual",
        brand: "New Balance",
        price: 79.99,
        oldPrice: 99.99,
        rating: 4.9,
        reviews: 421,
        stock: 9,

        description: "Premium black sneaker with clean styling for everyday casual wear.",
    },

    {
        id: 5,
        image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
        title: "Sports Max",
        tag: "Hot",
        offer: "18% OFF",

        category: "Sports",
        brand: "Reebok",
        price: 82.99,
        oldPrice: 101.99,
        rating: 4.5,
        reviews: 156,
        stock: 32,

        description: "Comfortable sports sneaker suitable for gym, walking and daily activities.",
    },

    {
        id: 6,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
        title: "Premium Canvas",
        tag: "Premium",
        offer: "22% OFF",

        category: "Casual",
        brand: "Vans",
        price: 58.99,
        oldPrice: 75.99,
        rating: 4.4,
        reviews: 98,
        stock: 16,

        description: "Minimal canvas sneaker with durable construction and soft inner lining.",
    },

    {
        id: 7,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
        title: "Urban Flex",
        tag: "Top Rated",
        offer: "28% OFF",

        category: "Lifestyle",
        brand: "Converse",
        price: 64.99,
        oldPrice: 89.99,
        rating: 4.8,
        reviews: 274,
        stock: 7,

        description: "Flexible streetwear sneaker combining lightweight materials with modern design.",
    },

    {
        id: 8,
        image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=800&q=80",
        title: "Daily Comfort Plus",
        tag: "Recommended",
        offer: "12% OFF",

        category: "Walking",
        brand: "Skechers",
        price: 71.99,
        oldPrice: 81.99,
        rating: 4.7,
        reviews: 203,
        stock: 21,

        description: "Soft and comfortable walking sneaker designed for long daily use.",
    },

    {
        id: 9,
        image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=800&q=80",
        title: "Street Runner X",
        tag: "New",
        offer: "16% OFF",

        category: "Running",
        brand: "Asics",
        price: 95.99,
        oldPrice: 114.99,
        rating: 4.6,
        reviews: 141,
        stock: 14,

        description: "Responsive running shoe designed for everyday runs and street training.",
    },

    {
        id: 10,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
        title: "Retro High Top",
        tag: "Limited",
        offer: "35% OFF",

        category: "Lifestyle",
        brand: "Jordan",
        price: 129.99,
        oldPrice: 199.99,
        rating: 4.9,
        reviews: 512,
        stock: 5,

        description: "Retro-inspired high-top sneaker with premium materials and iconic styling.",
    },
    {
        id: 11,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80",
        title: "Air Sport Elite",
        tag: "Best Seller",
        offer: "20% OFF",

        category: "Running",
        brand: "Nike",
        price: 109.99,
        oldPrice: 139.99,
        rating: 4.8,
        reviews: 332,
        stock: 20,

        description: "Advanced running sneaker with excellent support and lightweight design.",
    },

    {
        id: 12,
        image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=800&q=80",
        title: "Classic White Pro",
        tag: "Popular",
        offer: "15% OFF",

        category: "Casual",
        brand: "Adidas",
        price: 84.99,
        oldPrice: 99.99,
        rating: 4.7,
        reviews: 221,
        stock: 15,

        description: "Clean white sneaker perfect for everyday casual outfits.",
    },

    {
        id: 13,
        image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=800&q=80",
        title: "Velocity Runner",
        tag: "Trending",
        offer: "25% OFF",

        category: "Sports",
        brand: "Puma",
        price: 74.99,
        oldPrice: 99.99,
        rating: 4.6,
        reviews: 198,
        stock: 28,

        description: "Performance sports shoe built for speed and comfort.",
    },

    {
        id: 14,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
        title: "Street Classic",
        tag: "Featured",
        offer: "18% OFF",

        category: "Lifestyle",
        brand: "Converse",
        price: 62.99,
        oldPrice: 76.99,
        rating: 4.5,
        reviews: 167,
        stock: 11,

        description: "Classic streetwear sneaker with timeless design.",
    },

    {
        id: 15,
        image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=800&q=80",
        title: "Mountain Trek",
        tag: "Outdoor",
        offer: "22% OFF",

        category: "Outdoor",
        brand: "Columbia",
        price: 119.99,
        oldPrice: 149.99,
        rating: 4.8,
        reviews: 287,
        stock: 13,

        description: "Durable outdoor shoe designed for hiking and adventure.",
    },

    {
        id: 16,
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
        title: "Comfort Walk",
        tag: "Recommended",
        offer: "10% OFF",

        category: "Walking",
        brand: "Skechers",
        price: 69.99,
        oldPrice: 77.99,
        rating: 4.7,
        reviews: 356,
        stock: 30,

        description: "Ultra comfortable walking shoe with soft cushioning.",
    },

    {
        id: 17,
        image: "https://images.unsplash.com/photo-1554139847-1a7c3d4f5f2a?auto=format&fit=crop&w=800&q=80",
        title: "Luxury Leather",
        tag: "Premium",
        offer: "30% OFF",

        category: "Formal",
        brand: "Clarks",
        price: 139.99,
        oldPrice: 199.99,
        rating: 4.9,
        reviews: 409,
        stock: 6,

        description: "Premium leather footwear with elegant formal styling.",
    },

    {
        id: 18,
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
        title: "Speed Racer",
        tag: "Hot",
        offer: "27% OFF",

        category: "Running",
        brand: "Asics",
        price: 99.99,
        oldPrice: 136.99,
        rating: 4.8,
        reviews: 275,
        stock: 19,

        description: "High-performance running shoe with responsive technology.",
    },

    {
        id: 19,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
        title: "Daily Street Wear",
        tag: "New Arrival",
        offer: "14% OFF",

        category: "Sneakers",
        brand: "New Balance",
        price: 88.99,
        oldPrice: 103.99,
        rating: 4.6,
        reviews: 187,
        stock: 22,

        description: "Modern sneaker combining comfort and street fashion.",
    },

    {
        id: 20,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
        title: "Legend High Top",
        tag: "Limited",
        offer: "35% OFF",

        category: "Basketball",
        brand: "Jordan",
        price: 149.99,
        oldPrice: 229.99,
        rating: 4.9,
        reviews: 620,
        stock: 4,

        description: "Iconic high-top basketball sneaker with premium finish.",
    },
];

export default bestItems;