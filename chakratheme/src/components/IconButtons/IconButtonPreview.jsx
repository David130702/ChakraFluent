import React from "react";
import { Box, Text, HStack, Divider, Button } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { AiOutlineSearch } from "react-icons/ai";
import MenuButtonprev from "../Buttons/MenuButtonprev";
import CommandBarButton from "../Buttons/CommandBarButton";

export default function IconButtonPreview() {
  return (
    <>
      <Box w={"100vw"} h={"20vh"} px={"20px"} py={"20px"}>
        <Text color={"black"} fontSize={"16px"} fontWeight={"thin"}>
          IconButton
        </Text>
        <Divider size={"100"} />
        <HStack pt={"20px"} spacing={"40px"}>
          <Button variant={"iconButton"}>
            <AiOutlineSearch />
          </Button>
          <MenuButtonprev />
          <CommandBarButton />
          <Button variant={"iconButton"} leftIcon={<EmailIcon />}>
            <Text color={"black"} fontSize={14}>
              some Text
            </Text>
          </Button>
        </HStack>
      </Box>
    </>
  );
}
