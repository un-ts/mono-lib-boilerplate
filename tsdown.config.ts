import { defineConfig } from 'tsdown'

export default defineConfig({
  workspace: true,
  entry: 'src/index.ts',
  outDir: 'lib',
  format: ['esm', 'cjs'],
  // Mirror `src/` in `lib/` instead of bundling everything into one file.
  unbundle: true,
  dts: true,
  // `publishConfig` points at `lib/index.js` (ESM) and `lib/index.cjs` (CJS).
  outExtensions: ({ format }) => ({ js: format === 'cjs' ? '.cjs' : '.js' }),
})
