import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Cookies | Samantha Saurino",
  description: "Política de uso de cookies en samanthasaurino.com.",
  alternates: { canonical: "https://samanthasaurino.com/politica-de-cookies/" },
};

export default function PoliticaCookiesPage() {
  return (
    <LegalLayout title="Política de Cookies" updatedAt="Noviembre 2026">
      <p>
        En este sitio web utilizamos cookies técnicas, analíticas y
        publicitarias (incluyendo Google AdSense) con la finalidad de mejorar tu
        experiencia de navegación y ofrecer contenido relevante.
      </p>

      <h2>¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que tu navegador almacena en
        tu dispositivo cuando visitas una página web. No contienen información
        personal sensible y la mayoría se eliminan automáticamente al finalizar
        la sesión.
      </p>

      <h2>Tipos de cookies utilizadas</h2>
      <ul>
        <li>
          <strong>Cookies técnicas:</strong> Necesarias para el funcionamiento y
          rendimiento óptimo de la web.
        </li>
        <li>
          <strong>Cookies analíticas y publicitarias (Google AdSense):</strong>{" "}
          Permiten medir audiencias y mostrar anuncios relevantes conforme a las
          políticas de Google.
        </li>
      </ul>

      <h2>Desactivación o eliminación de cookies</h2>
      <p>
        Puedes configurar tu navegador (Chrome, Safari, Firefox o Edge) en
        cualquier momento para bloquear o eliminar las cookies almacenadas en tu
        dispositivo.
      </p>
    </LegalLayout>
  );
}
