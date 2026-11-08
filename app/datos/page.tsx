
"use client";

import { useEffect, useState } from "react";

interface Datos {
  nombre: string;
  matricula: string;
  carrera: string;
  universidad: string;
  correo: string;
}

export default function DatosPage() {
  const [datos, setDatos] = useState<Datos | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("/api/datos")
      .then((respuesta) => respuesta.json())
      .then((informacion) => setDatos(informacion))
      .finally(() => setCargando(false));
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-red-600 mb-6">
        Mis datos personales
      </h1>

      <div className="bg-zinc-900 text-white border border-red-900 shadow-lg rounded-xl p-6 space-y-4">
        {cargando ? (
          <p>Cargando datos...</p>
        ) : datos ? (
          <>
            <p><strong className="text-red-500">Nombre:</strong> {datos.nombre}</p>
            <p><strong className="text-red-500">Matrícula:</strong> {datos.matricula}</p>
            <p><strong className="text-red-500">Carrera:</strong> {datos.carrera}</p>
            <p><strong className="text-red-500">Universidad:</strong> {datos.universidad}</p>
          </>
        ) : (
          <p>No se pudieron cargar los datos.</p>
        )}
      </div>
    </main>
  );
}
