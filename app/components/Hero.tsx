import Link from 'next/link';

export default function Hero() {
    return (
        <section className="bg-[var(--bg-main)]">
            {/* Texte à gauche */}
            <div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    Salut, je suis <span className="text-indigo-600">Delaude Théo</span> 👋
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-lg">
                    Développeur full-stack orienté performance et éco-conception.
                </p>

                </div>
        </section>
    );
}