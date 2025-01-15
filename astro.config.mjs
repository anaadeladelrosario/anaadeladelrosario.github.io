import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

const SERVER_PORT =3000;

// url to access the portfolio under development phase https://astrofy.netlify.app
const LOCALHOST_URL =  `http://localhost:${SERVER_PORT}`;

// url to access the portfolio after deploying somewhere (e.g. GitHub Pages)
const PROD = "https://anaadeladelrosario.github.io";

const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build")

let BASE_URL = LOCALHOST_URL;

// when building site in local set your URL manually
if (isBuild)
{
  BASE_URL = PROD;
}


// https://astro.build/config
export default defineConfig({
  server:{ port:SERVER_PORT },
  site: BASE_URL,
  integrations: [mdx(), sitemap(), tailwind()]
});