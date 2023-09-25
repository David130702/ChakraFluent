import React from "react";
import MainButton from "./MainButton";
import { Box, Text, HStack, Divider } from "@chakra-ui/react";

//DOKU
/* To use this button you only need to import Mainbutton which by default has some styles like the Primary Button from fluent UI 
To modify the button you just need to change the props of the button as shown below which overwrites the default styles 
There are no stylings you can't add or overwrite. 
*/

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
          />
          <MainButton
            txt={"Primary"}
            color={"white"}
            border={"mainColor"}
            _hover={{ bg: "brand.600" }}
          />
        </HStack>
      </Box>
    </>
  );
}
