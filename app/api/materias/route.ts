import { NextResponse } from "next/server";

export async function GET() {
  const materias = [
    { id: 1, nombre: "Creencias Cristianas" },
    { id: 2, nombre: "Base de Datos Aplicadas" },
    { id: 3, nombre: "Cálculo 2" },
    { id: 4, nombre: "Física 2" },
    { id: 5, nombre: "Desarrollo Web" }
  ];

  return NextResponse.json(materias);
}