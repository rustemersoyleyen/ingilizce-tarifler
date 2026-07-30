import { defineConfig } from "vite";

export default defineConfig({
 // base: process.env.GITHUB_PAGES ? "/ingilizce-tarifler/" : "/",
   base: process.env.CF_PAGES
    ? '/blog/ingilizce-tarifler/'
    : process.env.GITHUB_PAGES
      ? '/ingilizce-tarifler/'
      : '/',
});
