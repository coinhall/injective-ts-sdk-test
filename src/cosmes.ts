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
