import terser from '@rollup/plugin-terser'

export default {
  input: 'src/complex.js', // Entry file
  output: [
    {
      file: 'dist/complex.esm.js', // ESM format
      format: 'esm',
    },
    {
      file: 'dist/complex.cjs.js', // CommonJS format
      format: 'cjs',
    },
    {
      file: 'dist/complex.min.js', // Minified version
      format: 'umd',
      name: 'ComplexNumbers', // Global variable name for UMD format
      plugins: [terser()], // Minify the code
    },
  ],
  external: [], // Add any external dependencies if needed
}
