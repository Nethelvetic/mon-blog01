import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full bg-gray-800 text-white py-4">
            <ul className="flex justify-around">
                <li className="hover:underline cursor-pointer">
                    <Link href="/">Accueil</Link>
                </li>
                <li className="hover:underline cursor-pointer">
                    <Link href="/mes-blogs">Mes Blogs</Link>
                </li>
                <li className="hover:underline cursor-pointer">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
