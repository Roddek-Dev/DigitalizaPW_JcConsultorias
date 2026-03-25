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
      image: "asesoria-pensiones",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="w-8 h-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.5-1 2-1.5L22 12A6 6 0 0 0 19 5Z"/><path d="M2 9v1c0 1.1.9 2 2 2h1"/><path d="M16 11h.01"/></svg>`
    },
    {
      title: "Compraventa de Bienes",
      description: "Acompañamos el proceso completo de inversión inmobiliaria desde el exterior, brindando respaldo jurídico, estudio de títulos y representación confiable sin necesidad de que usted viaje.",
      image: "plan-individual-colombianos-exterior",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="w-8 h-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
    },
    {
      title: "Apostilla y Legalización",
      description: "Nos encargamos de todos los trámites de apostilla y legalización de documentos para que tengan plena validez tanto en Colombia como en su país de residencia.",
      image: "gestion-contratos",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="w-8 h-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m11 15 2 2 4-4"/></svg>`
    },
    {
      title: "Sucesiones y Herencias",
      description: "Asistencia legal completa para la reclamación de derechos herenciales, liquidación de sucesiones y adjudicación de bienes en Colombia, protegiendo su patrimonio.",
      image: "hero-sucesiones-herencias",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="w-8 h-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c1.33 0 2.67-1 2.67-1"/><path d="m2 16 3-8 3 8c1.33 0 2.67-1 2.67-1"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>`
    },
    {
      title: "Derecho de Familia",
      description: "Representación experta en procesos de separación, divorcio, guardia, custodia y fijación de cuotas de alimentos, garantizando el bienestar de sus seres queridos desde cualquier país.",
      image: "derecho-familia-pensiones",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="w-8 h-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
    },
    {
      title: "Trámites Notariales",
      description: "Gestión ágil de poderes especiales, obtención de copias de registros civiles, escrituración y otros trámites ante notarías e instrumentos públicos en territorio colombiano.",
      image: "asesoria-profesional",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="w-8 h-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>`
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
