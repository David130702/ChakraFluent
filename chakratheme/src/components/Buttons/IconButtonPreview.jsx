import React from "react";
import { Box, Text, HStack, Divider, Button } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import MenuButtonprev from "./MenuButtonprev";

export default function IconButtonPreview() {
  return (
    <>
      <Box w={"100vw"} h={"20vh"} px={"20px"} py={"20px"}>
        <Text color={"black"} fontSize={"16px"} fontWeight={"thin"}>
          Default IconButton
        </Text>
        <Divider size={"100"} />
        <HStack pt={"20px"} spacing={"40px"}>
          <Button variant={"iconButton"}>
            <AiOutlineSearch />
          </Button>
          <MenuButtonprev />
        </HStack>
      </Box>
    </>
  );
}
