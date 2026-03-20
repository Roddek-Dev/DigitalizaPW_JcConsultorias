export interface ExteriorService {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}
export interface ExteriorData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  services: ExteriorService[];
  bridgeMessage: {
    title: string;
    description: string[];
  }
}

export const exteriorData: ExteriorData = {
  hero: {
    title: "JC Colombianos en el Exterior",
    subtitle: "Conectamos a colombianos en el exterior con soluciones jurídicas y administrativas en Colombia.",
    description: "Gestionamos trámites legales y administrativos en Colombia sin que tengas que viajar."
  },
  services: [
    {
      title: "Pensiones",
      description: "Asesoramos a colombianos en el exterior para resolver inconsistencias y tomar las mejores decisiones para gestionar su pensión de invalidez, vejez, sobrevivencia y pensión familiar desde cualquier país.",
      image: "asesoria-pensiones"
    },
    {
      title: "Compraventa de Bienes",
      description: "Acompañamos el proceso completo de inversión inmobiliaria desde el exterior, brindando respaldo jurídico, estudio de títulos y representación confiable sin necesidad de que usted viaje.",
      image: "plan-individual-colombianos-exterior"
    },
    {
      title: "Apostilla y Legalización",
      description: "Nos encargamos de todos los trámites de apostilla y legalización de documentos para que tengan plena validez tanto en Colombia como en su país de residencia.",
      image: "gestion-contratos"
    },
    {
      title: "Sucesiones y Herencias",
      description: "Asistencia legal completa para la reclamación de derechos herenciales, liquidación de sucesiones y adjudicación de bienes en Colombia, protegiendo su patrimonio.",
      image: "hero-sucesiones-herencias"
    },
    {
      title: "Derecho de Familia",
      description: "Representación experta en procesos de separación, divorcio, guardia, custodia y fijación de cuotas de alimentos, garantizando el bienestar de sus seres queridos desde cualquier país.",
      image: "derecho-familia-pensiones"
    },
    {
      title: "Trámites Notariales",
      description: "Gestión ágil de poderes especiales, obtención de copias de registros civiles, escrituración y otros trámites ante notarías e instrumentos públicos en territorio colombiano.",
      image: "asesoria-profesional"
    }
  ],
  bridgeMessage: {
    title: "Un puente entre Colombia y el mundo",
    description: [
      "JC CONSULTORIAS Y SERVICIOS actúa como un puente entre Colombia y los países donde residen los colombianos, facilitando trámites que de otra forma serían complejos de realizar a distancia.",
      "Trabajamos con aliados estratégicos para garantizar soluciones confiables, claras y seguras."
    ]
  }
};
