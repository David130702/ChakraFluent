import React from "react";
import { Box, Text, HStack, Divider, Checkbox } from "@chakra-ui/react";

export default function CheckboxPreview() {
  return (
    <Box w={"100vw"} h={"20vh"} px={"20px"} py={"20px"}>
      <Text color={"black"} fontSize={"16px"} fontWeight={"thin"}>
        Default Checkbox
      </Text>
      <Divider size={"100"} />
      <HStack pt={"20px"} spacing={"40px"}>
        <Checkbox />
        <Checkbox defaultChecked></Checkbox>
        <Checkbox isDisabled />
        <Checkbox isDisabled isChecked />
      </HStack>
    </Box>
  );
}
