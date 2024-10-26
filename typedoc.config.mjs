/** @type {Partial<import('typedoc').TypeDocOptions>} */

const config = {
  name: 'ao-sdk',
  entryPointStrategy: 'expand',
  entryPoints: ['./src'],
  out: 'docs/typedoc',

  plugin: ['typedoc-plugin-markdown', 'typedoc-vitepress-theme'],
  out: './docs/api',
  docsRoot: './docs',
  tsconfig: 'tsconfig.json',
  readme: './README.md',
  githubPages: false,
  exclude: [
    '**/node_modules/**/*',
    '**/dist/**/*',
    '**/lib/**/*',
    '**/bundles/**/*',
  ],
  skipErrorChecking: true,
};

export default config;
