import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// The Nitro build preset (which server platform the build targets) is controlled
// entirely by the NITRO_PRESET env var, not by this config — see vercel.json,
// which builds with NITRO_PRESET=vercel. Without that var Nitro falls back to
// its own default preset, which is fine for local `vite build`/`vite preview`.
export default defineConfig({
  plugins: [
    tanstackStart({
      // Redirects TanStack Start's bundled server entry to src/server.ts
      // (our SSR error wrapper) — nitro/vite builds from this.
      server: { entry: "server" },
    }),
    viteReact(),
    tailwindcss(),
    tsConfigPaths(),
    nitro(),
  ],
});
