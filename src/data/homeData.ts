export interface HomeData {
  hero: {
    badge: string;
    title: string;
    description: string;
    ctaEmpresa: { label: string; href: string };
    ctaExterior: { label: string; href: string };
  };
  purpose: {
    title: string;
    description: string;
  };
}

export const homeData: HomeData = {
  hero: {
    badge: "Soluciones en Colombia",
    title: "Gestionamos soluciones para Empresas en Colombia y para Colombianos en el Exterior.",
    description: "Brindamos asesoría legal a empresas en Colombia y acompañamos a colombianos en el exterior en sus trámites en el país.",
    ctaEmpresa: { label: "SOY EMPRESA", href: "/empresas" },
    ctaExterior: { label: "SOY COLOMBIANO EN EL EXTERIOR", href: "/colombianos-exterior" }
  },
  purpose: {
    title: "Nuestro Propósito",
    description: "Conectamos a los colombianos y a las empresas con soluciones legales y administrativas confiables en Colombia, sin importar dónde se encuentren."
  }
};
