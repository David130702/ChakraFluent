import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  HStack,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

export default function SearchBoxPreview() {
  return (
    <>
      <Box w={"100vw"} h={"20vh"} px={"20px"} py={"20px"}>
        <Text color={"black"} fontSize={"16px"} fontWeight={"thin"}>
          Input
        </Text>
        <Divider size={"100"} />
        <HStack pt={"20px"} spacing={"40px"}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <PhoneIcon color={"mainColor"} />
            </InputLeftElement>
            <Input />
          </InputGroup>
        </HStack>
      </Box>
    </>
  );
}
