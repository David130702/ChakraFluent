import React from "react";
import { Button, Text, Stack } from "@chakra-ui/react";

export default function CompoundButton({ txt, stxt, border, ...rest }) {
  return (
    <>
      <Button
        w={"150px"}
        h={"65px"}
        bg={"mainColor"}
        border={`1px solid ${border ? border : "black"}`}
        borderRadius={0}
        textAlign={"left"}
        {...rest}
      >
        <Stack>
          <Text mb={"-5px"}>{txt}</Text>
          <Text fontSize={"small"} fontWeight={"thin"}>
            {stxt}
          </Text>
        </Stack>
      </Button>
    </>
  );
}
