import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/complex.ts', // Entry file (your TypeScript file)
  output: [
    {
      file: 'dist/complex.esm.js', // ESM format (for modern JS)
      format: 'esm',
    },
    {
      file: 'dist/complex.cjs.js', // CommonJS format (for Node.js)
      format: 'cjs',
    },
    {
      file: 'dist/complex.min.js', // Minified UMD format (for browsers)
      format: 'umd',
      name: 'ComplexNumbers', // Global variable name for UMD format
      plugins: [terser()], // Minify the UMD build
    },
  ],
  plugins: [
    typescript(),
  ],
  external: [], // If you have external dependencies, add them here
}
