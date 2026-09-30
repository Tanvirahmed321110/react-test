import { Link, useParams } from 'react-router-dom'
import './ProductDetails.css'
import trendingItems from '../../data/bestItems.js'
import { useState } from 'react'
import Modal from '../../components/Modal.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectCartTotal } from '../../features/cartSlice'

function ProductDetails() {

    const [zoomPosition, setZoomPosition] = useState({
        x: 50,
        y: 50
    });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        setZoomPosition({
            x,
            y
        });
    };

    const dispatch = useDispatch()
    const total = useSelector(selectCartTotal)


    const [cartModal, setCartModal] = useState(false)

    const { id } = useParams()
    const product = trendingItems.find((item) => item.id === Number(id))

    // When Product Not Found
    if (!product) {
        return (
            <div className="product-page">
                <div className="wrapper">
                    <h1>Product not found</h1>
                    <Link href="/products">Back to products</Link>
                </div>
            </div>
        )
    }


    const { image, brand, title, offer, tag, price, rating, reviews, category, oldPrice, description, stock } = product


    return (
        <div className="product-page">
            <div className="wrapper">

                <nav className="breadcrumb">
                    <Link to="/">Home</Link><span className="sep">/</span>
                    <Link to="/products">Products</Link><span className="sep">/</span>
                    <span className="current">Nike Air Runner</span>
                </nav>

                <section className="product">
                    <div className="product-image" onMouseMove={handleMouseMove}>
                        <img
                            className='object-cover transition-transform duration-300 hover:scale-150 cursor-zoom-in'
                            src={image}
                            alt={title}
                            style={{
                                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
                            }}
                        />
                        <span className="badge badge-tag">{tag}</span>
                        <span className="badge badge-offer">{offer} </span>
                    </div>

                    <div>
                        <p className="meta">{brand} • <Link to={`/category?name=${category.toLowerCase()}`}>{category}</Link></p>
                        <h1>{title}</h1>
                        <p className="rating"><strong>★ {reviews}</strong>({rating} reviews)</p>

                        <div className="price">
                            <span className="now">${price}</span>
                            <span className="old">${oldPrice}</span>
                        </div>

                        <p className="description">
                            {description}
                        </p>

                        <p className="label">Select size</p>
                        <div className="sizes">
                            <input type="radio" name="size" id="s39" value="39" /><label htmlFor="s39">39</label>
                            <input type="radio" name="size" id="s40" value="40" /><label htmlFor="s40">40</label>
                            <input type="radio" name="size" id="s41" value="41" /><label htmlFor="s41">41</label>
                            <input type="radio" name="size" id="s42" value="42" /><label htmlFor="s42">42</label>
                            <input type="radio" name="size" id="s43" value="43" /><label htmlFor="s43">43</label>
                            <input type="radio" name="size" id="s44" value="44" /><label htmlFor="s44">44</label>
                        </div>

                        <div className="buy">
                            <input className="qty" type="number" defaultValue="1" min="1" max="18" aria-label="Quantity" />
                            <button
                                onClick={() => {
                                    dispatch(addToCart({
                                        id: product.id,
                                        title,
                                        price,
                                        image,
                                    }))
                                    setCartModal(true)
                                }}
                                className="add-btn" type="button">
                                Add to Cart
                            </button>
                            {/* Modal */}
                            <Modal isOpen={cartModal} onClose={() => setCartModal(false)} >
                                Total {total.toFixed(2)}
                            </Modal>
                        </div>

                        <p className="stock">{stock} in stock</p>

                        <dl className="details">
                            <div><dt>Brand</dt><dd>{brand}</dd></div>
                            <div><dt>Category</dt><dd>{category}</dd></div>
                            <div><dt>Shipping</dt><dd>Free above $5</dd></div>
                            <div><dt>Returns</dt><dd>7-day easy return</dd></div>
                        </dl>
                    </div>
                </section>

            </div >
        </div >
    )
}

export default ProductDetails