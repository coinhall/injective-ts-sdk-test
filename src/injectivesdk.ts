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
