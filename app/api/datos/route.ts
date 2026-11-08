import { NextResponse } from "next/server";

export async function GET() {
  const datos = {
    nombre: "Alexis Junior Hernández Suárez",
    matricula: "2025-0252",
    carrera: "Ingeniería de Software",
    universidad: "Universidad Adventista Dominicana",
  };

  return NextResponse.json(datos);
}
