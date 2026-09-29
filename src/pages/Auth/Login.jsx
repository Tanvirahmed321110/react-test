import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState(localStorage.getItem("rememberedEmail") || '')
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [rememberMe, setRememberMe] = useState(!!localStorage.getItem("rememberedEmail"));
    const navigate = useNavigate()


    // Submit
    const haldleSubmit = (e) => {
        e.preventDefault();

        // check email and password
        if (email === 'tanvir@gmail.com' && password === '1111') {
            if (rememberMe) {
                localStorage.setItem("rememberedEmail", email);
            } else {
                localStorage.removeItem("rememberedEmail");
            }

            const user = { name: "Tanvir", email: email }

            localStorage.setItem('token', 'fake-token-123')
            localStorage.setItem('user', JSON.stringify(user))

            navigate('/')
            window.location.reload()
        }
        else {
            setError("ইমেইল বা পাসওয়ার্ড ভুল");
        }

    }

    return (
        <section className="flex min-h-[80vh] items-center justify-center px-4 py-16">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
                <h1 className="text-2xl font-bold text-[#1f2a44]">Login Account</h1>

                <form className="mt-6 space-y-4" onSubmit={haldleSubmit}>


                    <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="At least 6 characters"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                        />
                    </div>
                    {/* Remember me */}
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="h-4 w-4 accent-orange-600"
                        />
                        Remember me
                    </label>

                    {error && <p className="text-sm text-red-600"> {error}</p>}


                    <button
                        type="submit"
                        className="w-full rounded-lg bg-orange-600 py-2.5 text-md font-semibold text-white transition-colors hover:bg-orange-700"
                    >
                        Login Now
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    account না থাকলে?{" "}
                    <Link to="/register" className="font-semibold text-orange-600 hover:underline">
                        Register করুন
                    </Link>
                </p>
            </div>
        </section>
    );
}

export default Login;