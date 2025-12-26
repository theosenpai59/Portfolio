export interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
}

export const projects: Project[] = [
    {
        title: "Car Racing",
        description: "Développement d'une IA permettant de réussir un tour de circuit en utilisant le DQN.",
        tags: ["Python", "IA", "GitLab"],
        link: "https://gitlab.univ-artois.fr/trio-de-la-mort/carracing",
    },
    {
        title: "API REST",
        description: "Conception et développement d'une API REST robuste avec gestion des endpoints et sécurité avec Spring.",
        tags: ["Java", "Spring", "API", "Développement Avancé"],
        link: "https://gitlab.univ-artois.fr/s5.a.01-developpement-avance/api_rest",
    },
    {
        title: "Gestion de Base de Données",
        description: "Modélisation et implémentation d'une base de données complexe. Utilisation de MongoDb et Neo4j",
        tags: ["MongoDb", "Neo4J", "Modélisation", "BDD"],
        link: "https://gitlab.univ-artois.fr/s5.a.01-developpement-avance/bdd",
    },
    {
        title: "Qualité & Gestion de Salles",
        description: "Système de gestion des salles du département informatique avec un focus sur la qualité logicielle et les tests.",
        tags: ["Qualité Logicielle", "Gestion", "Tests Unitaires"],
        link: "https://gitlab.univ-artois.fr/qualite-developpement/projet-salles-departement",
    },
];