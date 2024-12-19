import React, { useState } from 'react'

// 1. Basic 3-Column Responsive Grid
const ResponsiveThreeColumnGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
            {/* 
        On mobile (default), we have a single column (grid-cols-1).
        On tablet (md), we have 3 columns (grid-cols-3).

        The gap between columns is 4 units (gap-4), and the container has a padding of 4 units (p-4).

        The background color is a light blue (bg-blue-100), and the text has a light blue-200 color.
      */}
            <div className="rounded bg-blue-100 p-4">Column 1</div>
            <div className="rounded bg-blue-200 p-4">Column 2</div>
            <div className="rounded bg-blue-300 p-4">Column 3</div>
        </div>
    )
}

// 2. Card Gallery with Responsive Grid
const CardGalleryGrid: React.FC = () => {
    const cards = [
        { title: 'Card 1', content: 'Description 1' },
        { title: 'Card 2', content: 'Description 2' },
        { title: 'Card 3', content: 'Description 3' },
        { title: 'Card 4', content: 'Description 4' },
    ]

    return (
        <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl"
                >
                    <div className="p-4">
                        <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
                        <p className="text-gray-700">{card.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

// 3. Dashboard Layout with Varied Column Spans
const DashboardGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4">
            <div className="rounded bg-green-100 p-4 md:col-span-3">
                Main Content Area
            </div>
            <div className="rounded bg-green-200 p-4 md:col-span-1">
                Sidebar
            </div>
            <div className="rounded bg-green-300 p-4 md:col-span-2">
                Analytics Chart
            </div>
            <div className="rounded bg-green-400 p-4 md:col-span-2">
                Recent Activities
            </div>
        </div>
    )
}

// 4. Image Gallery with Masonry-like Grid
const ImageGalleryGrid: React.FC = () => {
    const images = [
        { src: 'https://placehold.co/300x200', height: 'h-48' },
        { src: 'https://placehold.co/300x300', height: 'h-64' },
        { src: 'https://placehold.co/300x250', height: 'h-56' },
        { src: 'https://placehold.co/300x400', height: 'h-80' },
    ]

    return (
        <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`${image.height} overflow-hidden rounded-lg`}
                >
                    <img
                        src={image.src}
                        alt={`Gallery image ${index + 1}`}
                        className="h-full w-full object-cover"
                    />
                </div>
            ))}
        </div>
    )
}

// 5. Flexible Form Layout
const ResponsiveFormGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded border p-2"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded border p-2"
                />
            </div>
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded border p-2"
                />
                <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full rounded border p-2"
                />
            </div>
        </div>
    )
}

// Basic Layout: Navbar + Main + Footer
const BasicLayout: React.FC = () => {
    return (
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
            {/* Navbar */}
            <nav className="bg-blue-600 p-4 text-white">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">Logo</div>
                    <div className="space-x-4">
                        <a href="#" className="hover:text-blue-200">
                            Home
                        </a>
                        <a href="#" className="hover:text-blue-200">
                            About
                        </a>
                        <a href="#" className="hover:text-blue-200">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="bg-gray-100 p-6">
                <h1 className="mb-4 text-2xl font-bold">Main Content Area</h1>
                <p className="text-gray-700">
                    This is the main content area that will grow to fill
                    available space. The footer will always stay at the bottom
                    of the viewport. lorem2000
                </p>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 p-4 text-white">
                <div className="text-center">
                    © 2024 Example Company. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

// Complex Layout: Navbar + Sidebar + Main + Footer
const ComplexLayout: React.FC = () => {
    return (
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
            {/* Navbar */}
            <nav className="col-span-full bg-indigo-600 p-4 text-white">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">Dashboard</div>
                    <div className="flex items-center space-x-4">
                        <button className="rounded p-2 hover:bg-indigo-500">
                            <span className="text-xl">🔔</span>
                        </button>
                        <button className="rounded p-2 hover:bg-indigo-500">
                            <span className="text-xl">👤</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Content Area with Sidebar */}
            <div className="grid flex-1 grid-cols-[240px_1fr]">
                {/* Sidebar */}
                <aside className="bg-gray-800 p-4 text-white">
                    <nav className="space-y-2">
                        <div className="cursor-pointer rounded p-2 hover:bg-gray-700">
                            Dashboard
                        </div>
                        <div className="cursor-pointer rounded p-2 hover:bg-gray-700">
                            Analytics
                        </div>
                        <div className="cursor-pointer rounded p-2 hover:bg-gray-700">
                            Reports
                        </div>
                        <div className="cursor-pointer rounded p-2 hover:bg-gray-700">
                            Settings
                        </div>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="overflow-auto bg-gray-100 p-6">
                    <div className="max-w-4xl">
                        <h1 className="mb-4 text-2xl font-bold">
                            Dashboard Overview
                        </h1>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {/* Sample Cards */}
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="rounded-lg bg-white p-4 shadow"
                                >
                                    <h2 className="mb-2 text-lg font-semibold">
                                        Card {i}
                                    </h2>
                                    <p className="text-gray-600">
                                        This is a sample card in the dashboard
                                        layout.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>

            {/* Footer */}
            <footer className="col-span-full bg-gray-800 p-4 text-white">
                <div className="flex items-center justify-between">
                    <div>© 2024 Dashboard Inc.</div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-300">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            Terms
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            Contact
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

const ComplexLayoutWithHiddenSideBar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    return (
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
            {/* Navbar */}
            <nav className="bg-indigo-600 p-4 text-white">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="rounded-lg p-2 transition-colors hover:bg-indigo-500"
                        >
                            {isSidebarOpen ? '◀' : '▶'}
                        </button>
                        <div className="text-xl font-bold">Dashboard</div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="rounded p-2 hover:bg-indigo-500">
                            <span className="text-xl">🔔</span>
                        </button>
                        <button className="rounded p-2 hover:bg-indigo-500">
                            <span className="text-xl">👤</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Middle section with sidebar and main content */}
            <div className="grid grid-cols-[auto_1fr]">
                {/* Sidebar */}
                <aside
                    className={`overflow-hidden bg-gray-800 text-white transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-0'} `}
                >
                    <nav
                        className={`space-y-2 p-4 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'} whitespace-nowrap transition-opacity duration-300`}
                    >
                        <div className="cursor-pointer rounded p-2 hover:bg-gray-700">
                            Dashboard
                        </div>
                        <div className="cursor-pointer rounded p-2 hover:bg-gray-700">
                            Analytics
                        </div>
                        <div className="cursor-pointer rounded p-2 hover:bg-gray-700">
                            Reports
                        </div>
                        <div className="cursor-pointer rounded p-2 hover:bg-gray-700">
                            Settings
                        </div>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="overflow-auto bg-gray-100 p-6">
                    <div className="max-w-4xl">
                        <h1 className="mb-4 text-2xl font-bold">
                            Dashboard Overview
                        </h1>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="rounded-lg bg-white p-4 shadow"
                                >
                                    <h2 className="mb-2 text-lg font-semibold">
                                        Card {i}
                                    </h2>
                                    <p className="text-gray-600">
                                        This is a sample card in the dashboard
                                        layout.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 p-4 text-white">
                <div className="flex items-center justify-between">
                    <div>© 2024 Dashboard Inc.</div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-300">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            Terms
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            Contact
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

const SubgridCards: React.FC = () => {
    const products = [
        {
            title: 'Premium Laptop',
            price: '$1,299',
            image: 'https://placehold.co/200x200',
            description:
                'High-performance laptop with the latest specifications',
            specs: ['16GB RAM', '1TB SSD', '4.5GHz CPU'],
        },
        {
            title: 'Wireless Headphones',
            price: '$199',
            image: 'https://placehold.co/200x150',
            description:
                'Noise-cancelling wireless headphones with long battery life',
            specs: ['40h Battery', 'Bluetooth 5.0', 'ANC'],
        },
        {
            title: 'Smart Watch Smart WatchSmart WatchSmart WatchSmart Watch',
            price: '$299',
            image: 'https://placehold.co/200x150',
            description:
                'Advanced smartwatch with health tracking features  Lorem ipsum dolor sit, amet consectetur adipisicing elit.  porro voluptates voluptatem atque architecto dolorem nostrum fugiat odit enim consequatur nulla maiores.',
            specs: ['Heart Rate', 'GPS', '5 ATM'],
        },
    ]

    return (
        <div className="bg-gray-100 p-6">
            <h1 className="mb-6 text-2xl font-bold">Product Catalog</h1>

            {/* Parent Grid Container */}
            <div className="grid grid-cols-1 grid-rows-[auto_auto_1fr_auto] gap-6 md:grid-cols-3">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="row-span-4 grid grid-cols-1 grid-rows-subgrid gap-4 overflow-hidden rounded-lg bg-white shadow-md"
                    >
                        {/* Image Section */}
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full object-cover self-center"
                        />

                        {/* Title and Price Section */}
                        <div className="px-4">
                            <h2 className="text-3xl font-semibold">
                                {product.title}
                            </h2>
                            <p className="text-lg font-bold text-blue-600">
                                {product.price}
                            </p>
                        </div>

                        {/* Description Section */}
                        <div className="px-4">
                            <p className="text-gray-600">
                                {product.description}
                            </p>
                            <ul className="mt-2 space-y-1">
                                {product.specs.map((spec, i) => (
                                    <li
                                        key={i}
                                        className="text-sm text-gray-500"
                                    >
                                        • {spec}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Button Section */}
                        <div className="px-4 pb-4">
                            <button className="w-full rounded-md bg-blue-600 py-2 text-white transition-colors hover:bg-blue-700">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Another Section with Same Layout */}
            <h2 className="my-6 text-2xl font-bold">Featured Items</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {products.slice(0, 2).map((product, index) => (
                    <div
                        key={index}
                        className="grid grid-rows-[auto_auto_1fr_auto] gap-4 overflow-hidden rounded-lg bg-white shadow-md"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-48 w-full object-cover"
                        />

                        <div className="px-4">
                            <h2 className="text-xl font-semibold">
                                {product.title}
                            </h2>
                            <p className="text-lg font-bold text-blue-600">
                                {product.price}
                            </p>
                        </div>

                        <div className="px-4">
                            <p className="text-gray-600">
                                {product.description}
                            </p>
                            <ul className="mt-2 space-y-1">
                                {product.specs.map((spec, i) => (
                                    <li
                                        key={i}
                                        className="text-sm text-gray-500"
                                    >
                                        • {spec}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="px-4 pb-4">
                            <button className="w-full rounded-md bg-blue-600 py-2 text-white transition-colors hover:bg-blue-700">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export {
    ResponsiveThreeColumnGrid,
    CardGalleryGrid,
    DashboardGrid,
    ImageGalleryGrid,
    ResponsiveFormGrid,
    BasicLayout,
    ComplexLayout,
    ComplexLayoutWithHiddenSideBar,
    SubgridCards,
}
