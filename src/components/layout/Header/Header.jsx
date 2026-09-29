import Logo from "./Logo";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {

    const [sidebar, setSidebar] = useState(false);

    // login
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'))

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        window.location.reload()
    }

    return (
        <header>
            <div className="container">

                <div className="flex items-center justify-between py-2">

                    <Logo />

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <Nav />
                    </div>

                    {/* Desktop Login / User */}
                    {token ? (
                        <div className="hidden md:flex items-center gap-4">
                            <span style={{ fontWeight: 600 }}>Hi, {user?.name}</span>
                            <button
                                onClick={handleLogout}
                                className="bg-yellow-400 px-6 py-2"
                                style={{ fontWeight: 600 }}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link
                            className="hidden md:block bg-yellow-400 px-6 py-2"
                            to="/login"
                            style={{ fontWeight: 600 }}
                        >
                            Login
                        </Link>
                    )}

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setSidebar(true)}
                        className="block md:hidden text-3xl"
                    >
                        ☰
                    </button>

                </div>


                {/* Overlay */}
                {
                    sidebar && (
                        <div
                            onClick={() => setSidebar(false)}
                            className="fixed inset-0 bg-black/50 z-40"
                        />
                    )
                }


                {/* Mobile Sidebar */}
                <div
                    className={`fixed top-0 right-0 h-screen w-72 bg-white z-50 p-6 shadow-xl transition-transform duration-300 ${sidebar ? "translate-x-0" : "translate-x-full"
                        } md:hidden`}
                >

                    <div className="flex justify-between items-center mb-8">

                        <h2 className="text-xl font-bold">
                            Menu
                        </h2>

                        <button
                            onClick={() => setSidebar(false)}
                            className="text-2xl"
                        >
                            ✕
                        </button>

                    </div>


                    <Nav />


                    {/* Mobile Login / User */}
                    {token ? (
                        <div className="mt-6">
                            <p className="mb-3 text-center font-bold">Hi, {user?.name}</p>
                            <button
                                onClick={handleLogout}
                                className="block w-full bg-orange-500 text-white text-center py-2 rounded font-bold"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="block mt-6 bg-orange-500 text-white text-center py-2 rounded font-bold"
                        >
                            Login
                        </Link>
                    )}

                </div>

            </div>
        </header>
    );
}