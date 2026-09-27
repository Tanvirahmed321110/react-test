function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={onClose}>
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl" onClick={(e) => e.stopPropagation()}
            >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-3xl">
                    🚧
                </div>

                <h2 className="mt-4 text-lg font-semibold text-gray-800">
                    {title}
                </h2>

                <div className="mt-2 text-sm text-gray-500">
                    {children}
                </div>

                <button onClick={onClose}
                    className="mt-6 w-full rounded-lg bg-orange-600 py-2.5 text-sm font-semibold text-white hover:bg-orange-700">
                    ঠিক আছে
                </button>
            </div>
        </div>
    );
}

export default Modal;