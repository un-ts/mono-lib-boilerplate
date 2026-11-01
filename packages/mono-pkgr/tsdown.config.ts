import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  outDir: 'lib',
  format: ['esm', 'cjs'],
  // `publishConfig` points at `lib/index.js` (ESM) and `lib/index.cjs` (CJS).
  outExtensions: ({ format }) => ({ js: format === 'cjs' ? '.cjs' : '.js' }),
  // `tsc -b` owns the declarations, and the build scripts run side by side
  // (see `package.json`), so tsdown must not wipe the output directory.
  clean: false,
  dts: false,
})
