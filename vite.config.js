import 'dotenv/config';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import relay from 'vite-plugin-relay';
import path from 'path';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    react(),
    relay,
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  root: path.resolve(__dirname, 'app'),
  server: {
    port: Number(process.env.FRONT_PORT),
    proxy: {
      '/gql': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gql/, 'graphql')
      }
    }
  },
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, 'app')
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist', 'front'),
    sourcemap: true,
  }
});