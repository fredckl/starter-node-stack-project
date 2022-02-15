import {defineConfig} from 'vite';
import 'dotenv/config';
import react from '@vitejs/plugin-react';
import relay from 'vite-plugin-relay';
import path from 'path';

export default defineConfig({
  jsx: 'react',
  plugins: [react(), relay],
  root: './app',
  include: 'app/**/*.tsx',
  mode: process.env.NODE_ENV || 'development',
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
});