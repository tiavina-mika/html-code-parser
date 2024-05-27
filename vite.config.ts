import { UserConfig, defineConfig } from 'vite'
import { resolve } from 'path';
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [dts({ rollupTypes: true }), react()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'html-code-parser',
      // the proper extensions will be added
      fileName: 'index',
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  // resolve: { alias: { src: resolve('src/') } },
  server: {
    open: true,
  },
} satisfies UserConfig)
