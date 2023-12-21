# Bundling Test

## `@injectivelabs/sdk-ts`

```ts
import { MsgSend } from "@injectivelabs/sdk-ts";

console.log(
  MsgSend.fromJSON({
    amount: {
      amount: "1",
      denom: "",
    },
    srcInjectiveAddress: "",
    dstInjectiveAddress: "",
  })
);
```

```sh
pnpm esbuild ./src/injectivesdk.ts --outdir='.tmp' --bundle --minify --platform='node'
# .tmp/injectivesdk.js  8.2mb

pnpm esbuild ./src/injectivesdk.ts --outdir='.tmp' --bundle --minify --platform='browser'
# errors out without any output
```

## `cosmes`

```ts
import { MsgSend } from "cosmes/client";

console.log(
  new MsgSend({
    amount: [
      {
        amount: "1",
        denom: "",
      },
    ],
    fromAddress: "",
    toAddress: "",
  })
);
```

```sh
pnpm esbuild ./src/cosmes.ts --outdir='.tmp' --bundle --minify --platform='node'
# .tmp/cosmes.js  156.2kb

pnpm esbuild ./src/cosmes.ts --outdir='.tmp' --bundle --minify --platform='browser'
# .tmp/cosmes.js  39.1kb
```
