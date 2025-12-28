import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  // ВАЖНО для GitHub Pages (Project Pages):
  base: '/Premiumlandingpagedesign/',

  plugins: [react()],
  
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Уберите все алиасы с версиями - они обычно не нужны и могут вызывать проблемы
      // Вместо них используйте обычные имена пакетов в вашем коде
    },
  },
  
  build: {
    target: 'esnext',
    // Рекомендуется для GitHub Pages:
    outDir: 'dist',
  },
  
  server: {
    port: 3000,
    open: true,
  },
})
// Рекомендуется для GitHub Pages:
outDir: 'dist',
},
server: {
port: 3000,
open: true,
},
})
    },
  });
