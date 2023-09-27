import { HStack, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from "@chakra-ui/react";
import {ChevronDownIcon } from '@chakra-ui/icons'

export function DropdownMenu({w = 300}){
    const options = [
        { key: "fruitsHeader", text: "Fruits", itemType: "header" },
        { key: "apple", text: "Apple" },
        { key: "banana", text: "Banana" },
        { key: "orange", text: "Orange", disabled: true },
        { key: "grape", text: "Grape" },
        { key: "divider_1", text: "-", itemType: "divider" },
        { key: "vegetablesHeader", text: "Vegetables", itemType: "header" },
        { key: "broccoli", text: "Broccoli" },
        { key: "carrot", text: "Carrot" },
        { key: "lettuce", text: "Lettuce" },
      ];
      
    return (
        <Menu>
            <MenuButton borderRadius={2} borderWidth={1} py={1.5} borderColor={"#605e5c"} w={w} textAlign={"left"} px={3} fontSize={18} color={"#605e5c"}>
            <HStack h={"100%"}>
                <Text>
                    Select an option
                </Text>
                <Spacer />
                <ChevronDownIcon />
            </HStack>
            </MenuButton>
            <MenuList borderRadius={0} w={w} >
         {/*        {options?.} */}
                <MenuItem>
                Test
                </MenuItem>
            </MenuList>
        </Menu>
    )
}