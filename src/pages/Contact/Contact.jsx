import { useState } from "react";

const contactInfo = [
    {
        icon: "📍",
        title: "Visit us",
        lines: ["House 12, Road 5, Dhanmondi", "Dhaka, Bangladesh"],
    },
    {
        icon: "📞",
        title: "Call us",
        lines: ["+880 1XXX-XXXXXX", "Sat–Thu, 10am–8pm"],
    },
    {
        icon: "✉️",
        title: "Email us",
        lines: ["support@yourshop.com", "We reply within 24 hours"],
    },
];

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // এখানে আপনার আসল send logic (API/email service) বসবে
        console.log("Contact form:", form);
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="text-[#1f2a44]">
            {/* Hero */}
            <section className="bg-[#ff6600]">
                <div className="mx-auto max-w-[1340px] px-6 py-16 text-center lg:py-20">
                    <h1 className="text-4xl font-extrabold sm:text-5xl">Get in touch</h1>
                    <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
                        কোনো প্রশ্ন, অর্ডার নিয়ে সমস্যা, বা শুধু কথা বলতে চান? আমরা সবসময় শুনতে প্রস্তুত।
                    </p>
                </div>
            </section>

            {/* Contact info cards */}
            <section className="mx-auto -mt-10 max-w-[1340px] px-6">
                <div className="grid gap-6 sm:grid-cols-3">
                    {contactInfo.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl bg-white p-6 text-center shadow-lg"
                        >
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-2xl">
                                {item.icon}
                            </div>
                            <h3 className="mt-4 font-semibold">{item.title}</h3>
                            {item.lines.map((line) => (
                                <p key={line} className="mt-1 text-sm text-gray-600">
                                    {line}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* Form + map */}
            <section className="mx-auto max-w-[1340px] px-6 py-16 lg:py-24">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Form */}
                    <div className="rounded-2xl bg-white p-8 shadow-md">
                        <h2 className="text-2xl font-bold">Send us a message</h2>
                        <p className="mt-1 text-sm text-gray-500">
                            নিচের form পূরণ করুন, আমরা দ্রুত যোগাযোগ করব।
                        </p>

                        {sent && (
                            <p className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                                ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে।
                            </p>
                        )}

                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="How can we help?"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Write your message..."
                                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="rounded-lg bg-orange-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-700"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map + quick info */}
                    <div className="flex flex-col gap-6">
                        <div className="h-64 overflow-hidden rounded-2xl bg-gray-200 lg:h-full lg:min-h-[320px]">
                            {/* আসল map বসাতে iframe/Google Maps embed এখানে দিন */}
                            <iframe
                                title="store-location"
                                className="h-full w-full"
                                loading="lazy"
                                src="https://www.google.com/maps?q=Dhanmondi,Dhaka&output=embed"
                            />
                        </div>

                        <div className="rounded-2xl bg-[#1f2a44] p-6 text-white">
                            <h3 className="font-semibold">Store hours</h3>
                            <div className="mt-3 space-y-1 text-sm text-white/80">
                                <div className="flex justify-between">
                                    <span>Saturday – Thursday</span>
                                    <span>10:00 AM – 8:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Friday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;