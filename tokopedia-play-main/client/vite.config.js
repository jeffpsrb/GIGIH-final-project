import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    preview: {
      host: true,
      port: 8080,
    },
    define: {
      apiUrl: JSON.stringify(env.BASE_API_URL),
    },
  };
});
