import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  // Check if the build command is in production mode
  const isProduction = mode === "production";

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    server: {
      port: 3002,
    },
    base: isProduction ? "/Netflix-GPT/" : "/",
  });
};
