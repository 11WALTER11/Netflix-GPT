import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";
import sugrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the output dir from dist to build
  // Uncomment this out if that isn't relevant for your project
  build: {
    outDir: "build",
  },
  plugins: [
    reactRefresh(),
    sugrPlugin({
      svgrOptions: {
        icon: true,
        // ... svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
});
