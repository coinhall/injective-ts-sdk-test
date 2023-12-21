# Bundling Test

## `@injectivelabs/sdk-ts`

```sh
pnpm esbuild ./src/injectivesdk.ts --outdir='.tmp' --bundle --minify --platform='node'
# .tmp/injectivesdk.js  8.2mb

pnpm esbuild ./src/injectivesdk.ts --outdir='.tmp' --bundle --minify --platform='browser'
# errors out without any output
```

## `cosmes`

```sh
pnpm esbuild ./src/cosmes.ts --outdir='.tmp' --bundle --minify --platform='node'
# .tmp/cosmes.js  156.2kb

pnpm esbuild ./src/cosmes.ts --outdir='.tmp' --bundle --minify --platform='browser'
# .tmp/cosmes.js  39.1kb
```
