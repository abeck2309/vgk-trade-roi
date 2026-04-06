export type DashboardConfig = {
  title: string;
  description: string;
  url: string;
  embedUrl: string;
};

export const siteConfig = {
  dashboards: {
    tradeRoi: {
      title: "Trade ROI Dashboard",
      description:
        "Compare value received versus value given up across VGK trades, with realized player impact and future asset value brought into one view.",
      url: "https://public.tableau.com/shared/M5DPN5TWQ?:display_count=n&:origin=viz_share_link",
      embedUrl: "https://public.tableau.com/shared/M5DPN5TWQ?:showVizHome=no&:embed=yes"
    } satisfies DashboardConfig,
    capEfficiency: {
      title: "Cap Efficiency Dashboard",
      description:
        "Study how much on-ice value Vegas generated relative to the total cap hit carried over the evaluation period for each trade.",
      url: "https://public.tableau.com/shared/5T6QT42TZ?:display_count=n&:origin=viz_share_link",
      embedUrl: "https://public.tableau.com/shared/5T6QT42TZ?:showVizHome=no&:embed=yes"
    } satisfies DashboardConfig
  },
  links: {
    githubUrl: "https://github.com/abeck2309",
    linkedinUrl: "https://www.linkedin.com/in/andrewbeck23",
    instagramUrl: "https://www.instagram.com/andrew_beck23",
    email: "andrewjbeck23@outlook.com"
  }
};
