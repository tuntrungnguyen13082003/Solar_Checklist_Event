import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // ĐÃ XÓA DÒNG BASE
  base: '/Solar_Checklist_Event/',
    build: {
    rollupOptions: {
      output: {
        // Dòng này giúp giữ nguyên tên file trong thư mục assets
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.')[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          // Cấu hình tên file: assets/tên-gốc.đuôi
          return `assets/[name][extname]`;
        },
        
        // Tương tự cho file JS và CSS (nếu muốn)
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
      },
    },
  },
})
