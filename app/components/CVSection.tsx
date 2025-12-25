import { experiences, education } from '@/app/data/cv';

export default function CVSection() {
    return (
        <section id="projets">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold text-[var(--text-main)]">Mon Parcours</h2>
                    <div className="mt-4 h-1 w-20 bg-[var(--color-primary)] rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Colonne Expériences */}
                    <div>
                        <h3 className="text-xl font-semibold text-indigo-600 mb-6 flex items-center gap-2">
                            💼 Expériences
                        </h3>
                        <div className="space-y-8 border-l-2 border-gray-100 pl-6">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute -left-[31px] top-1 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white"></div>
                                    <h4 className="font-bold text-gray-900">{exp.title}</h4>
                                    <p className="text-sm text-gray-500/90 font-medium">{exp.company} | {exp.period}</p>
                                    <p className="text-gray-600 mt-2 text-sm">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Colonne Formations */}
                    <div>
                        <h3 className="text-xl font-semibold text-indigo-600 mb-6 flex items-center gap-2">
                            🎓 Formations
                        </h3>
                        <div className="space-y-8 border-l-2 border-gray-100 pl-6">
                            {education.map((edu, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute -left-[31px] top-1 w-4 h-4 bg-gray-400 rounded-full border-4 border-white"></div>
                                    <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                                    <p className="text-sm text-gray-500 font-medium">{edu.school} | {edu.period}</p>
                                    <p className="text-gray-600 mt-2 text-sm">{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}