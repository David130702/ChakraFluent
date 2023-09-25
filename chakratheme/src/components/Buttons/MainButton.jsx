import React from "react";
import { Button } from "@chakra-ui/react";

export default function MainButton({ txt, border, ...rest }) {
  return (
    <>
      <Button
        w={"100px"}
        h={"35px"}
        bg={"mainColor"}
        border={`1px solid ${border ? border : "black"}`}
        borderRadius={0}
        {...rest}
      >
        {txt}
      </Button>
    </>
  );
}
