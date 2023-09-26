import React from "react";
import MainButton from "./MainButton";
import { Box, Text, HStack, Divider } from "@chakra-ui/react";

export default function ButtonPreview() {
  return (
    <>
      <Box w={"100vw"} h={"20vh"} px={"20px"} py={"20px"}>
        <Text color={"black"} fontSize={"16px"} fontWeight={"thin"}>
          Default Button
        </Text>
        <Divider size={"100"} />
        <HStack pt={"20px"} spacing={"40px"}>
          <MainButton
            txt={"Standard"}
            color={"black"}
            border={"black"}
            bg={"white"}
            _hover={{ bg: "lightgrey" }}
          />
          <MainButton
            txt={"Primary"}
            color={"white"}
            border={"mainColor"}
            _hover={{ bg: "brand.100" }}
          />
        </HStack>
      </Box>
    </>
  );
}
