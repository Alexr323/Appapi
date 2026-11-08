
"use client";

import { useEffect, useState } from "react";

interface Materia {
  id: number;
  nombre: string;
}

export default function MateriasPage() {
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("/api/materias")
      .then((respuesta) => respuesta.json())
      .then((informacion) => setMaterias(informacion))
      .finally(() => setCargando(false));
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-red-600 mb-6">
        Materias que estoy cursando
      </h1>

      <div className="bg-zinc-900 text-white border border-red-900 shadow-lg rounded-xl p-6">
        {cargando ? (
          <p>Cargando materias...</p>
        ) : (
          <ul className="space-y-4">
            {materias.map((materia) => (
              <li
                key={materia.id}
                className="border-b border-red-900 p-3 text-lg"
              >
                {materia.nombre}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
