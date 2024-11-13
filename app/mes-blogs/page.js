import Link from "next/link";

const blogs = [
    {
        id: "ia-et-emplois",
        title: "L'IA et l'influence sur les emplois",
        date: "2024-11-13",
    },
    {
        id: "pourquoi-utiliser-ia",
        title: "Pourquoi utiliser l'IA",
        date: "2024-11-13",
    },
    {
        id: "contraintes-ia",
        title: "Les contraintes de l'IA",
        date: "2024-11-13",
    },
];

export default function MesBlogs() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Liste des Blogs</h1>
            <ul className="space-y-2">
                {blogs.map((blog) => (
                    <li key={blog.id} className="p-2 border rounded bg-gray-100 hover:bg-gray-200">
                        <Link href={`/mes-blogs/${blog.id}`}>
                            {blog.title}
                        </Link>
                        <p className="text-sm text-gray-600">{blog.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
