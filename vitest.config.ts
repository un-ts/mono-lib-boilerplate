import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      enabled: true,
      include: ['packages/*/src'],
      provider: 'istanbul',
      reporter: ['lcov', 'json', 'text'],
    },
  },
})
