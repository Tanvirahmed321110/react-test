import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'
import { useSelector } from 'react-redux';
import { selectCartCount } from '../../../features/cartSlice';

export default function Nav() {
    const totalItems = useSelector(selectCartCount)

    return (
        <nav className={`${styles.nav} flex flex-col md:flex-row gap-5`}>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/products">Product</NavLink>
            <NavLink to="/cart">Cart <span className={styles['cart-badge']}>{totalItems}</span></NavLink>
            <NavLink to="/happy-hour" className='happy-hours'>Happy Hours</NavLink>
        </nav>
    );
}

