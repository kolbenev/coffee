import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig((env) => {
  const { mode } = env;

  return {
    base: "/",
    plugins: [react()],
    css: {
      modules: {
        generateScopedName:
          mode === "development"
            ? "[name]__[local]___[hash:base64:5]"
            : "[hash:base64:8]",
      },
    },
    server: {
      port: 3000,
      open: true,

    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
