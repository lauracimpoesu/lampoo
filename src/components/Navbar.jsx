function Navbar() {
    return (
        <div>
            <div className="text-center py-4">
                <h1 className="text-4xl font-semibold">LAMPOO</h1>
            </div>
            <nav className="bg-white border-t-2 border-gray-300">
                <ul className="flex items-center justify-start text-black mt-4">
                    <li className="mx-4">
                        <a href="#" className="font-bold">New Arrivals</a>
                    </li>
                    <li className="mx-4">
                        <a href="#" className="font-bold">Designer</a>
                    </li>
                    <li className="mx-4">
                        <a href="#" className="font-bold">Bags</a>
                    </li>
                    <li className="mx-4">
                        <a href="#" className="font-bold">Shoes</a>
                    </li>
                    <li className="mx-4">
                        <a href="#" className="font-bold">Clothing</a>
                    </li>
                    <li className="mx-4">
                        <a href="#" className="font-bold">Jewellery</a>
                    </li>
                    <li className="mx-4">
                        <a href="#" className="font-bold">Accessories</a>
                    </li>
                    <li className="mx-4">
                        <a href="#" className="font-bold text-yellow-500">New with Tag</a>
                    </li>
                    <li className="mx-4">
                        <a href="#" className="font-bold text-red-500">Sale</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
