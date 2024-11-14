"use client";

import { useState } from "react";

export default function ContactPage() {
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertType, setAlertType] = useState(""); // success ou error

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Collecte des données du formulaire
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            // Appel au webhook Make
            const response = await fetch("https://hook.eu1.make.com/e19q1xysudcchty2f6egoefglos7yzae", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            // Vérification de la réponse
            const result = await response.json(); // Lire la réponse JSON
            if (response.ok) {
                setAlertMessage(result.message || "Formulaire envoyé avec succès !");
                setAlertType("success");
                e.target.reset(); // Réinitialiser le formulaire
            } else {
                setAlertMessage(result.message || "Une erreur est survenue. Veuillez réessayer.");
                setAlertType("error");
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi des données :", error);
            setAlertMessage("Une erreur est survenue. Veuillez réessayer.");
            setAlertType("error");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full"
            >
                <h1 className="text-2xl font-bold mb-4 text-gray-800">Contactez-nous</h1>

                {alertMessage && (
                    <div
                        className={`mb-4 p-4 rounded ${
                            alertType === "success"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                        }`}
                    >
                        {alertMessage}
                    </div>
                )}

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
