import { defineConfig } from 'tsdown'

export default defineConfig({
  workspace: true,
  entry: 'src/index.ts',
  outDir: 'lib',
  format: ['esm', 'cjs'],
  dts: true,
  outExtensions: ({ format }) => ({ js: format === 'cjs' ? '.cjs' : '.js' }),
})
