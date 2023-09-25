import React from "react";
import { Box, Text, HStack, Divider } from "@chakra-ui/react";
import MainCheckbox from "./MainCheckbox";

export default function CheckboxPreview() {
  return (
    <Box w={"100vw"} h={"20vh"} px={"20px"} py={"20px"}>
      <Text color={"black"} fontSize={"16px"} fontWeight={"thin"}>
        Default Checkbox
      </Text>
      <Divider size={"100"} />
      <HStack pt={"20px"} spacing={"40px"}>
        <MainCheckbox />
      </HStack>
    </Box>
  );
}
