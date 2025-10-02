// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'static'
  },
  
  //Localhost
  // site: 'http://localhost:4321/'

  //Deploy 20 Projects
  base: '/20-projects-with-bootstrap/',
  site: 'https://20essentials.github.io/20-projects-with-bootstrap/',
});
