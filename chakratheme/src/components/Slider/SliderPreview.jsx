import React from "react";
import { Box, Text, HStack, Divider } from "@chakra-ui/react";

export default function SliderPreview() {
  return (
    <>
      <Box w={"100vw"} h={"20vh"} px={"20px"} py={"20px"}>
        <Text color={"black"} fontSize={"16px"} fontWeight={"thin"}>
          Slider
        </Text>
        <Divider size={"100"} />
        <HStack pt={"20px"} spacing={"40px"}></HStack>
      </Box>
    </>
  );
}
