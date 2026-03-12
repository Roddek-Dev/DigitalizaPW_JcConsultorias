export interface ServiceItem {
  title: string;
  description?: string;
  icon?: string;
  image?: string;
}

export interface SubPageItem {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface EmpresasData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  services: ServiceItem[];
  subPages: SubPageItem[];
}

export const empresasData: EmpresasData = {
  hero: {
    title: "JC Empresas",
    subtitle: "Soluciones jurídicas y de gestión para empleadores colombianos.",
    description: "Acompañamos a empleadores colombianos en la gestión legal, laboral y empresarial de sus organizaciones."
  },
  services: [
    {
      title: "Asesoría Jurídica Laboral",
      description: "Conceptos jurídicos, tipos de contratos y actualización del Reglamento Interno de Trabajo acorde a la ley vigente para empleadores.",
      icon: "<svg class='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path></svg>",
      image: "administracion-personal"
    },
    {
      title: "Seguridad Social y Trámites EPS",
      description: "Asistencia jurídica para el reconocimiento de licencias, incapacidades y procedimientos médicos. Asesoría en pensiones (invalidez, vejez, sobrevivientes) y representación ante la UGPP.",
      icon: "<svg class='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'></path></svg>",
      image: "reunion-equipo-legal"
    },
    {
      title: "Defensa Judicial y Tutelas",
      description: "Representación experta ante demandas laborales por despidos sin justa causa, disputas por horas extras, reclamaciones de liquidación y Acciones de Tutela.",
      icon: "<svg class='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'></path></svg>",
      image: "defensa-judicial-tutelas"
    },
    {
      title: "Autorización de Horas Extras",
      description: "¿Hace cuánto no actualiza su Reglamento Interno? Evite sanciones y legalice su trabajo extra. Lo acompañamos en todo el proceso para obtener la autorización del Ministerio del Trabajo sin complicaciones.",
      icon: "<svg class='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m5.618-4.276a11.952 11.952 0 01-.548-8.782V3a1 1 0 00-1-1h-4a1 1 0 00-1 1v1.218c-.256.059-.508.126-.758.203M12 12v6m0 0h6m-6 0H6m6-6V6m0 0h6m-6 0H6'></path></svg>",
      image: "exito-contratacion"
    },
    {
      title: "Gestión Empresarial y Riesgos",
      description: "Asesoría en nuevas reglas de enfermedades ocupacionales, trámites jurídicos relacionados con accidentes de trabajo, y desarrollo de talento humano corporativo.",
      icon: "<svg class='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'></path></svg>",
      image: "gestion-contratos"
    },
    {
      title: "Asesoría Preventiva",
      description: "Auditorías laborales, diagnósticos de riesgos y capacitaciones para evitar contingencias legales y multas.",
      icon: "<svg class='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg>",
      image: "asesoria-profesional"
    }
  ],
  subPages: [
    {
      title: "Contratación Laboral",
      description: "Asesoría en modelos de contratación y formalización.",
      image: "hero-contratacion-laboral"
    },
    {
      title: "Gestión Empresarial",
      description: "Acompañamiento en el desarrollo organizacional y SG-SST.",
      image: "banner-gestion-talento-humano"
    },
    {
      title: "Diagnóstico Laboral Preventivo",
      description: "Auditoría laboral para prevención de riesgos y multas UGPP.",
      image: "banner-actualidad-juridica"
    },
    {
      title: "Evaluación objetiva del trabajo con enfoque de género",
      description: "Software especializado y metodología consultiva (Ley 2466 de 2025) para identificar, medir y corregir brechas salariales de forma estandarizada y justificable ante cualquier auditoría. Permite realizar valoración de cargos transparente alineada con los requerimientos del SG-SST y garantizar equidad organizacional.",
      image: "cumplimiento-marco-legal"
    }
  ]
};
