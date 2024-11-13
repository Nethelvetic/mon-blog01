import { notFound } from "next/navigation";

const blogs = [
    {
        id: "ia-et-emplois",
        title: "L'IA et l'influence sur les emplois",
        description:
            "L'intelligence artificielle transforme profondément le marché du travail, en automatisant des tâches tout en créant de nouvelles opportunités.",
        date: "2024-11-13",
    },
    {
        id: "pourquoi-utiliser-ia",
        title: "Pourquoi utiliser l'IA",
        description:
            "L'IA améliore l'efficacité et permet d'analyser de grandes quantités de données, ouvrant la voie à une prise de décision optimisée.",
        date: "2024-11-13",
    },
    {
        id: "contraintes-ia",
        title: "Les contraintes de l'IA",
        description:
            "L'IA pose des défis éthiques, techniques et financiers qui nécessitent une attention particulière pour garantir son adoption responsable.",
        date: "2024-11-13",
    },
];

export default function BlogDetails({ params }) {
    const { id } = params;

    // Recherche du blog correspondant
    const blog = blogs.find((b) => b.id === id);

    if (!blog) {
        notFound(); // Redirige vers la page 404 si le blog n'est pas trouvé
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{blog.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{blog.date}</p>
            <p className="text-lg text-gray-700">{blog.description}</p>
        </div>
    );
}
