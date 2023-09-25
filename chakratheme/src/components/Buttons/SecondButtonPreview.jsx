import React from "react";
import { Box, Text, HStack, Divider } from "@chakra-ui/react";
import CompoundButton from "./CompoundButton";

//DOKU
/* To use this button you only need to import CompoundButton which by default has some styles like the Primary Button from fluent UI 
To modify the button you just need to change the props of the button as shown below which overwrites the default styles 
There are no stylings you can't add or overwrite. 
*/

export default function SecondButtonPreview() {
  return (
    <>
      <Box w={"100vw"} h={"20vh"} px={"20px"} py={"20px"}>
        <Text color={"black"} fontSize={"16px"} fontWeight={"thin"}>
          Compound Button
        </Text>
        <Divider size={"100"} />
        <HStack pt={"20px"} spacing={"40px"}>
          <CompoundButton
            txt={"Standard"}
            stxt={"With some text"}
            color={"black"}
            border={"black"}
            bg={"white"}
          />
          <CompoundButton
            txt={"Primary"}
            stxt={"With some text"}
            color={"white"}
            border={"mainColor"}
            _hover={{ bg: "brand.600" }}
          />
        </HStack>
      </Box>
    </>
  );
}
