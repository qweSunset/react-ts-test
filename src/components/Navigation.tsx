import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-500 text-white items-center">
            <span className="text-bold text-white">React 2022</span>
            <span>
                <Link to="/" className="mr-2">Products</Link>
                <Link to="/drag">DragNdrop</Link>
            </span>
        </nav>
    )
}