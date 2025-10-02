// @ts-nocheck
import { defineConfig } from 'eslint/config';
import config from 'llqm-eslint';
export default defineConfig([
  ...config,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-empty': 'off'
    }
  }
]);
