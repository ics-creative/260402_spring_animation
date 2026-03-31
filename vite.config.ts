import { globSync } from "node:fs";
import { basename, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

const exampleInputs = Object.fromEntries(
  globSync("examples/*.html", { cwd: rootDir })
    .sort()
    .map((file) => [basename(file, extname(file)), fileURLToPath(new URL(file, import.meta.url))]),
);

export default defineConfig({
  base: "./",
  server: {
    host: true,
  },
  build: {
    rolldownOptions: {
      input: {
        index: fileURLToPath(new URL("./index.html", import.meta.url)),
        ...exampleInputs,
      },
    },
  },
});
