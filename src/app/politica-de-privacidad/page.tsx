import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad | Samantha Saurino",
  description:
    "Política de Privacidad y protección de datos personales de samanthasaurino.com.",
  alternates: {
    canonical: "https://samanthasaurino.com/politica-de-privacidad/",
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalLayout title="Política de Privacidad" updatedAt="Noviembre 2026">
      <p>
        En esta <strong>Política de Privacidad</strong> te explicamos de forma
        clara y transparente cómo gestionamos los datos personales en{" "}
        <strong>samanthasaurino.com</strong>, para qué los utilizamos y cuáles
        son tus derechos conforme a la Ley N.º 29733 (Ley de Protección de Datos
        Personales del Perú) y su reglamento.
      </p>

      <h2>Datos de Identificación del Responsable</h2>
      <ul>
        <li>
          <strong>Responsable:</strong> Samantha Saurino
        </li>
        <li>
          <strong>Domicilio:</strong> Lima, Perú
        </li>
        <li>
          <strong>Sitio web:</strong>{" "}
          <a href="https://samanthasaurino.com">www.samanthasaurino.com</a>
        </li>
        <li>
          <strong>Correo de contacto:</strong>{" "}
          <a href="mailto:info@belle364.com">info@belle364.com</a>
        </li>
        <li>
          <strong>Actividad:</strong> Emprendimiento, difusión de la marca de
          cuidado personal femenino y masculino Belle 364, creación de contenido
          digital y blog educativo.
        </li>
      </ul>

      <h2>Finalidad del Tratamiento de tus Datos</h2>
      <p>
        Para navegar por este sitio web no necesitas registrarte. Únicamente
        tratamos los datos que nos proporcionas voluntariamente cuando nos
        escribes por correo electrónico para atender tus consultas sobre{" "}
        <strong>Belle 364</strong>, colaboraciones profesionales o dudas sobre
        nuestros contenidos.
      </p>

      <h2>Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)</h2>
      <p>
        Puedes ejercer en cualquier momento tus derechos de acceso,
        rectificación, cancelación u oposición enviando un correo electrónico a{" "}
        <a href="mailto:info@belle364.com">info@belle364.com</a>.
      </p>
    </LegalLayout>
  );
}
