import React from "react";
import { Box, Text, HStack, Divider, Stack, Select } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { PiCaretDownThin } from 'react-icons/pi'
import "./test.css"
import { Dropdown } from "./Dropdown";
import { DropdownMenu } from "./DropdownMenu";

export default function DropdownPreview() {
  const Preview = ({ name, children }) => {
    return (
      <Stack>
        <Text fontSize={12} fontWeight={"bold"}>{name}</Text>
        {children}
      </Stack>
    );
  };

  const selectProps = {

  }

  return (
    <>
      <Box w={"100vw"} h={"40vh"} px={"20px"} py={"20px"}>
        <Text color={"black"} fontSize={"16px"} fontWeight={"thin"}>
          Dropdowns
        </Text>
        <Divider size={"100"} />
        <HStack pt={"20px"} spacing={"40px"}>
          <Preview name="Basic uncontrolled example">
            <Select w={300} icon={<PiCaretDownThin/>} placeholder="Select an option"  {...selectProps}>
              <option disabled={true} value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Preview>
          <Preview name="Basic uncontrolled example">
            <Dropdown />
          </Preview>
          <Preview name="Basic">
            <DropdownMenu />
          </Preview>
        </HStack>
      </Box>
    </>
  );
}
