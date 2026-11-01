import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      enabled: true,
      include: ['packages/*/src'],
      provider: 'v8',
      reporter: ['lcov', 'json', 'text'],
    },
  },
})
