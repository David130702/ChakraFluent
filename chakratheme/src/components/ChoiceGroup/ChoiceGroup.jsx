import React from "react";
import {
  Box,
  Text,
  HStack,
  Divider,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

export default function ChoiceGroup() {
  return (
    <>
      <Box w={"100vw"} h={"20vh"} px={"20px"} py={"20px"}>
        <Text color={"black"} fontSize={"16px"} fontWeight={"thin"}>
          ChoiceGroup
        </Text>
        <Divider size={"100"} />
        <HStack pt={"20px"} spacing={"40px"}>
          <RadioGroup>
            <Stack direction="row">
              <Radio value="1">First</Radio>
              <Radio value="2">Second</Radio>
              <Radio value="3">Third</Radio>
            </Stack>
          </RadioGroup>
        </HStack>
      </Box>
    </>
  );
}
