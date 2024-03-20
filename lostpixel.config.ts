import type { CustomProjectConfig } from "lost-pixel";

export const config: CustomProjectConfig = {
  storybookShots: {
    storybookUrl: "./storybook-static",
  },
  pageShots: {
    pages: [{ path: "/", name: "app" }],
    baseUrl: "http://172.17.0.1:3000",
  },
  lostPixelProjectId: "cltzobwzp22v6i60ezxdeh8eu",
  apiKey: process.env.LOST_PIXEL_API_KEY,
};
