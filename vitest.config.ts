import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    autoImport({
      imports: 'vitest',
    }),
  ],
  test: {
    coverage: {
      include: ['packages/*/src'],
      provider: 'istanbul',
      reporter: ['lcov', 'json', 'text'],
    },
  },
})
