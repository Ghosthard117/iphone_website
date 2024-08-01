import MillionLint from '@million/lint';
import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
const _plugins = [react(), sentryVitePlugin({
  org: "ghosthard1117",
  project: "iphone-website"
})];
_plugins.unshift(MillionLint.vite())
export default defineConfig({
  plugins: _plugins,
  build: {
    sourcemap: true
  }
});