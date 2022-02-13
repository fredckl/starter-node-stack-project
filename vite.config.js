import {defineConfig} from 'vite';
import 'dotenv/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
	jsx: 'react',
	plugins: [react()],
	root: './app',
	include: 'app/**/*.tsx',
	mode: process.env.NODE_ENV || 'development',
	server: {
		port: Number(process.env.FRONT_PORT)
	}
});