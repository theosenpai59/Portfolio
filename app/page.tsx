// src/app/page.tsx
import Hero from '@/app/components/Hero';
import ProjectCard from '@/app/components/ProjectCard';
import CVSection from '@/app/components/CVSection';
import { projects } from '@/app/data/projects';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Skills from "@/app/components/Skills";

export default function Home() {
    return (

        <div className="min-h-screen bg-[var(--bg-main)] space-y-24">
            <Header />
            {/* 1. Section d'accueil : Présentation rapide */}
            <Hero />
            <Skills />

            {/* 2. Section Projets : Tes dépôts GitLab de l'Université d'Artois */}
            <section id="projets">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Projets Académiques
                        </h2>
                        <div className="mt-4 h-1 w-20 bg-indigo-600 rounded"></div>
                        <p className="text-gray-600 mt-6 text-lg">
                            Voici une sélection de projets réalisés durant mon cursus à l'Université d'Artois.
                            Ils illustrent mes compétences en développement logiciel, gestion de données et travail d'équipe.
                        </p>
                    </div>

                    {/* Grille de projets - 1 col sur mobile, 2 cols sur desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {projects.map((item, index) => (
                            <ProjectCard key={index} project={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Section CV : Expériences et Formations */}
            <CVSection />

            {/* 4. Section Appel à l'action (CTA) optionnelle pour terminer la page */}
            <Footer />
        </div>
    );
}