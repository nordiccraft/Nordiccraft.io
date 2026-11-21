import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// When deploying to a custom domain (nordiccraft.io), base should be '/'.
// If testing on https://<user>.github.io/<repo>/ before DNS is ready,
// pass VITE_BASE=/<repo>/ in the build environment.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
});
