import { resolve } from 'path';

export default {
  // config options
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        survey: resolve(__dirname, 'survey/index.html'),
      },
    },
  },
};
