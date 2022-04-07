import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

const sevenflashIntegration = () => {
  return {
    name: 'sevenflash',
    hooks: {
      'astro:config:setup': ({ addRenderer }) => {
        addRenderer({
          name: 'sevenflash',
          clientEntrypoint: 'sevenflash/client.js',
        });
      },
    },
  };
};

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), sevenflashIntegration()],
});
