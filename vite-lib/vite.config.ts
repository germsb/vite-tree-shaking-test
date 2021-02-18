import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import visualizer from 'rollup-plugin-visualizer';
import typescript2 from "rollup-plugin-typescript2"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
    ...typescript2({tsconfigOverride: {compilerOptions: { declaration: true }}}),
    apply: 'build',
    enforce: 'pre'
    },
    
    visualizer({
      filename: './dist/stats.html',
      title: 'Rentool App',
      template: 'sunburst',
      sourcemap: true,
    })
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(process.cwd(), "src/exports"),
      name: "lib"
    }
  }
})
