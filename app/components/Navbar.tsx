
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="bg-black text-white p-4 border-b-4 border-red-700">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <span className="text-red-600">Mi Portal Académico</span> 
        </h1>

        <button
          className="md:hidden text-2xl text-red-500"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          ☰
        </button>

        <div className={`${menuAbierto ? "flex" : "hidden"} flex-col md:flex md:flex-row gap-5 absolute md:static top-16 left-0 w-full md:w-auto bg-black p-4 md:p-0 z-10`}>
          <Link
            className="hover:text-red-500 transition"
            href="/datos"
            onClick={() => setMenuAbierto(false)}
          >
            Datos personales
          </Link>

          <Link
            className="hover:text-red-500 transition"
            href="/materias"
            onClick={() => setMenuAbierto(false)}
          >
            Mis materias
          </Link>
        </div>
      </div>
    </nav>
  );
}
