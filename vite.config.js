import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/Random-Quotes-Machine/", // <<<< qui
  plugins: [react()],
});

