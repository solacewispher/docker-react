import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0',
  },
  test: {
    environment: 'jsdom', // Specifies the testing environment
    globals: true,       // Enables global usage of test and expect
    setupFiles: './vitest.setup.js', // Optional, if you use setup
  },
});
