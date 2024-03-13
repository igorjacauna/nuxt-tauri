import ip from 'ip';

function ipAdress() {
  return ip.address();
}

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  runtimeConfig: {
    DISABLE_VITE_HMR: true,
  },
  vite: {
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_', 'NUXI_'],
    server: {
      strictPort: true,
      hmr: {
        protocol: 'ws',
        host: ipAdress(),
        port: 3001,
      },
    },
  },
  srcDir: './src-app'
})
