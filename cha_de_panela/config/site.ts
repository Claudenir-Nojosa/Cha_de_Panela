export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Cha de Panela",
  description: "Cha de Panela Bilau 2024",
  sidebarLinks: [
    {
      imgURL: "/assets/homepage.svg",
      route: "/",
      label: "Homepage",
    },
    {
      imgURL: "/assets/logout.svg",
      route: "",
      label: "Sair",
    },
  ],
};

export const sidebarLinks = [];
