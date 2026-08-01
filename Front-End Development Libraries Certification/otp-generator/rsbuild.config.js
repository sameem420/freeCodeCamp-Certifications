// @ts-check
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  html: {
    title: "freeCodeCamp - One-Time Password Generator Lab",
  },
  plugins: [
    pluginReact({
      reactCompiler: true,
    }),
  ],
});
