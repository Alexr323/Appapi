import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mi Portal Académico",
  description: "Mis datos personales y materias"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
<body className="bg-zinc-950 text-white min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
