// app/api/contact/route.js

import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        // 1. Extraire les données de la requête reçue
        const data = await req.json();

        // 2. Envoyer les données au webhook Make
        const response = await fetch('https://hook.eu1.make.com/e19q1xysudcchty2f6egoefglos7yzae', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // 3. Vérifier si la requête vers Make a réussi
        if (response.ok) {
            // 4. Extraire la réponse JSON renvoyée par Make
            const makeResponse = await response.json();

            // 5. Récupérer le message du JSON renvoyé par Make
            const message = makeResponse.message;

            // 6. Envoyer la réponse à l'utilisateur
            return NextResponse.json({ message: message });
        } else {
            // Si l'appel vers Make a échoué
            return NextResponse.json({ message: 'Erreur lors de l\'envoi au webhook Make.' }, { status: 500 });
        }
    } catch (error) {
        // Gestion des erreurs du serveur
        console.error("Erreur lors de l'envoi des données :", error);
        return NextResponse.json({ message: 'Erreur interne du serveur.' }, { status: 500 });
    }
}
