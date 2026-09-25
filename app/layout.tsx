import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Programa de Afiliados ChatVioniko | Gana Comisiones Recomendando IA",
  description:
    "Conoce el programa de afiliados de ChatVioniko, prueba la plataforma gratis y accede al apartado de afiliados al activar tu suscripcion.",
  openGraph: {
    title:
      "Programa de Afiliados ChatVioniko | Gana Comisiones Recomendando IA",
    description:
      "Prueba ChatVioniko, descubre sus herramientas de IA y conoce como funciona el programa de afiliados para suscriptores activos.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030711",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
