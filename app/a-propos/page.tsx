export default function AboutPage() {
    return (
        <main className="bg-[var(--bg-main)]">
            <section className="container mx-auto px-6 py-20 max-w-3xl bg-white/80 rounded-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                    À propos de moi
                </h1>

                <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
                    <p>
                        Je m’appelle <strong>Théo Delaude</strong>, étudiant en BUT Informatique
                        à l’IUT de Lens. Je me forme au développement d’applications et développement Web.
                    </p>

                    <p>
                        Ce que j’aime dans l’informatique, ce n’est pas seulement écrire du
                        code, mais comprendre comment les choses fonctionnent, résoudre des
                        problèmes concrets et construire des applications utiles et durables.
                    </p>

                    <p>
                        J’accorde beaucoup d’importance à la lisibilité du code, à sa
                        maintenabilité et à son impact. C’est pour cette raison que je
                        m’intéresse aux bonnes pratiques et à l’éco-conception logicielle.
                    </p>

                    <p>
                        En dehors du développement, je suis quelqu’un de curieux et organisé.
                        J’aime apprendre, améliorer mes méthodes de travail et progresser
                        continuellement.
                    </p>
                </div>

                <div className="mt-14">
                    <a
                        href="/contact"
                        className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                        Me contacter
                    </a>
                </div>
            </section>
        </main>
    );
}
