function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <nav className="mt-10 flex items-center justify-center gap-2">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="h-10 rounded-lg border border-gray-300 px-4 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40 hover:border-orange-500"
            >
                Prev
            </button>

            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`h-10 w-10 rounded-lg text-sm font-medium transition-colors ${page === currentPage
                        ? "bg-orange-600 text-white"
                        : "border border-gray-300 hover:border-orange-500"
                        }`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="h-10 rounded-lg border border-gray-300 px-4 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40 hover:border-orange-500"
            >
                Next
            </button>
        </nav>
    );
}

export default Pagination;