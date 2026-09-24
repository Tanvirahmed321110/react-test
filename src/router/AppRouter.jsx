import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout"
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Products from "../pages/Products/Products";
import Offer from "../pages/Offer/Offer";

export default function AppRouter() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products />} />
                <Route path="/happy-hour" element={<Offer />} />
            </Route>
        </Routes>
    )
}