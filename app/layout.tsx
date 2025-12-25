import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: 'Portfolio de Delaude Théo | Développeur',
    description: 'Développeur . Découvrez mes projets académiques réalisés à l\'Université d\'Artois.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className="bg-[var(--bg-main)]">
        <body className="antialiased text-[var(--text-main)] bg-[var(--bg-main)]">
        {children}
        </body>
        </html>
    );
}