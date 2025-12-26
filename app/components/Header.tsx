import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white/80 backdrop-blur border-b border-indigo-100">
        <nav className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-indigo-600">
                    Delaude Théo
                </Link>
                <div>
                    <Link href="/#projets" className="ml-4 text-gray-600 hover:text-indigo-600">
                        Projets
                    </Link>
                    <Link href="/a-propos" className="ml-4 text-gray-600 hover:text-indigo-600">
                        À Propos
                    </Link>
                    <Link href="/contact" className="ml-4 text-gray-600 hover:text-indigo-600">
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
}