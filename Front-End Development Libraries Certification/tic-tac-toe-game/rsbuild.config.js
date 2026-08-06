// @ts-check
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  html: {
    title: "freeCodeCamp - Tic-Tac-Toe Game Certification Project",
  },
  plugins: [
    pluginReact({
      reactCompiler: true,
    }),
  ],
});
