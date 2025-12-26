export default function Skills() {
    return (
        <section
            id="competences"
            className="py-24"
        >
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)]">
                        Compétences
                    </h2>
                    <div className="mt-4 h-1 w-20 bg-[var(--color-primary)] rounded"></div>
                    <p className="text-[var(--text-muted)] mt-6 text-lg">
                        Technologies et méthodes que j’utilise régulièrement dans mes projets académiques et professionnels.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Langages */}
                    <div className="bg-white/80 rounded-xl p-6 border border-indigo-100">
                        <h3 className="text-lg font-bold text-indigo-600 mb-4">
                            Langages
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>Java</li>
                            <li>Python</li>
                            <li>JavaScript/TypeScript</li>
                            <li>SQL</li>
                        </ul>
                    </div>

                    {/* Frameworks & outils */}
                    <div className="bg-white/80 rounded-xl p-6 border border-indigo-100">
                        <h3 className="text-lg font-bold text-indigo-600 mb-4">
                            Frameworks & Outils
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>Next.js</li>
                            <li>Spring</li>
                            <li>Git</li>
                            <li>MongoDB</li>
                            <li>Neo4J</li>
                            <li>React</li>
                            <li>PHP</li>
                        </ul>
                    </div>

                    {/* Méthodes */}
                    <div className="bg-white/80 rounded-xl p-6 border border-indigo-100">
                        <h3 className="text-lg font-bold text-indigo-600 mb-4">
                            Méthodes & Qualité
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>Programmation orientée objet</li>
                            <li>Tests unitaires</li>
                            <li>Qualité logicielle</li>
                            <li>Éco-conception</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
