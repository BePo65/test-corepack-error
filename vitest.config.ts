import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    browser: {
      headless: true,
      enabled: false,
      provider: 'playwright',
      instances: [
        { browser: 'chromium' },
      ],
    },
  },
})
