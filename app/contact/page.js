"use client";

export default function ContactPage() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Collecte des données du formulaire
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log("Données envoyées :", data);


        // Appel à Make pour transmettre les données
        try {
            const response = await fetch("https://hook.eu1.make.com/e19q1xysudcchty2f6egoefglos7yzae", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Votre message a été envoyé avec succès !");
                e.target.reset(); // Réinitialiser le formulaire
            } else {
                alert("Une erreur est survenue. Veuillez réessayer.");
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi des données :", error);
            alert("Une erreur est survenue. Veuillez réessayer.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full"
            >
                <h1 className="text-2xl font-bold mb-4 text-gray-800">Contactez-nous</h1>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nom
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full p-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full p-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="mt-1 block w-full p-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Envoyer
                </button>
            </form>
        </div>
    );
}
