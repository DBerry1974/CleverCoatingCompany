import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import compress from "astro-compress";
import vercel from '@astrojs/vercel/serverless';
import image from "@astrojs/image";
import sitemap from '@astrojs/sitemap';


// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: 'server',
  trailingSlash: 'never',
  adapter: vercel(),
  site: 'https://www.thecalifornialondon.com',
  integrations: [image(),tailwind(), react(), compress(), sitemap()]
});