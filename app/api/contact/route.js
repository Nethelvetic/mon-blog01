// app/api/contact/route.js

import { NextResponse } from 'next/server';

export async function POST(req) {
    console.log("Requête reçue dans l'API");  // Log de base
    // Lire les données envoyées dans la requête
    const data = await req.json();
    console.log("Données reçues :", data);
    return NextResponse.json({ message: "Requête reçue avec succès" });
}
