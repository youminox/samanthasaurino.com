import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Aviso Legal | Samantha Saurino",
  description: "Aviso Legal y condiciones de uso del sitio web samanthasaurino.com.",
  alternates: { canonical: "https://samanthasaurino.com/aviso-legal/" },
};

export default function AvisoLegalPage() {
  return (
    <LegalLayout title="Aviso Legal" updatedAt="Noviembre 2026">
      <p>
        Este Aviso Legal tiene el objetivo de informarte sobre tus derechos y
        obligaciones como usuario de este sitio web. Aquí encontrarás toda la
        información necesaria sobre este sitio, su actividad, los datos
        personales que recaba y su finalidad, así como las normas de uso que
        regulan su utilización.
      </p>
      <p>
        Este sitio web cumple con las normativas vigentes en Perú en materia de
        protección de datos personales (Ley N.º 29733), ofreciendo garantías de
        seguridad y transparencia para todos los usuarios.
      </p>

      <h2>Datos de Identificación</h2>
      <ul>
        <li>
          <strong>Titular responsable:</strong> Samantha Saurino
        </li>
        <li>
          <strong>Domicilio:</strong> Lima, Perú
        </li>
        <li>
          <strong>Sitio web:</strong>{" "}
          <a href="https://samanthasaurino.com">www.samanthasaurino.com</a>
        </li>
        <li>
          <strong>Marca asociada:</strong> Belle 364 (
          <a
            href="https://belle364.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.belle364.com
          </a>{" "}
          · <a href="mailto:info@belle364.com">info@belle364.com</a>)
        </li>
        <li>
          <strong>Correo de contacto:</strong>{" "}
          <a href="mailto:info@belle364.com">info@belle364.com</a>
        </li>
        <li>
          <strong>Actividad del sitio web:</strong> Marca personal de Samantha
          Saurino como emprendedora y creadora de contenido digital, difusión de
          su empresa de cuidado personal femenino y masculino Belle 364, y
          publicación de artículos informativos sobre emprendimiento, marketing
          digital y creación de contenido.
        </li>
      </ul>

      <h2>Propiedad Intelectual e Industrial</h2>
      <p>
        Todos los contenidos publicados en este sitio web (textos, artículos,
        fotografías, logotipos de Samantha Saurino y Belle 364, diseño gráfico y
        código fuente) están protegidos por los derechos de propiedad
        intelectual e industrial correspondientes. Queda prohibida su
        reproducción total o parcial sin autorización expresa de su titular.
      </p>

      <h2>Responsabilidad y Enlaces Externos</h2>
      <p>
        Este sitio web incluye enlaces hacia la tienda oficial de{" "}
        <strong>Belle 364</strong> (<code>belle364.com</code>) y otros recursos
        informativos. La titular no se responsabiliza del mal uso que terceros
        puedan realizar del contenido publicado con fines meramente educativos e
        informativos.
      </p>
    </LegalLayout>
  );
}
