import { Project } from '@/app/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
    return (
        // On garde un changement de couleur de bordure simple pour l'accessibilité
        <div className="bg-white/70 backdrop-blur-sm rounded-lg border border-indigo-100 p-6 hover:border-indigo-300 transition-colors">
            <h3 className="text-xl font-bold text-gray-900">
                {project.title}
            </h3>

            <p className="mt-3 text-gray-700 text-base leading-snug">
                {project.description}
            </p>

            {/* Liste de tags simple et lisible */}
            <div className="mt-4 flex flex-wrap gap-2" aria-label="Technologies utilisées">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2 py-0.5 border border-indigo-100 bg-indigo-50 text-indigo-800 text-xs font-medium rounded-md"
                    >
            {tag}
          </span>
                ))}
            </div>

            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm font-bold text-indigo-700 underline hover:text-indigo-900"
            >
                Lien GitLab : {project.title}
            </a>
        </div>
    );
}