import ip from 'ip';

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  vite: {
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_', 'NUXI_'],
    server: {
      strictPort: true,
      hmr: {
        protocol: 'ws',
        host: ip.address(),
        port: 3001,
      },
    },
  },
  srcDir: './src-app'
})
