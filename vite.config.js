import { resolve } from 'path';

export default {
  // config options
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        survey: resolve(__dirname, 'survey/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        services: resolve(__dirname, 'services/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
      },
    },
  },
};
