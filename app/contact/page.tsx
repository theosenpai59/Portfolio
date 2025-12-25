export default function ContactPage() {
    const email = "theo.delaudedu59@gmail.com";

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

    return (
        <main className="container mx-auto px-6 py-20 max-w-2xl text-center">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">Me contacter</h1>
            <p className="text-lg text-gray-700 mb-10">
                Cliquez sur le bouton ci-dessous pour m'écrire directement via Gmail.
            </p>

            <div className="space-y-6">
                <a
                    href={gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-indigo-700 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-indigo-800 transition-colors"
                >
                    M'écrire sur Gmail
                </a>
            </div>
        </main>
    );
}