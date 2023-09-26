import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, SmallAddIcon } from "@chakra-ui/icons";

export default function CommandBarButton({ ...rest }) {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          variant={"iconButton"}
          rightIcon={<ChevronDownIcon color={"grey"} />}
          leftIcon={<SmallAddIcon />}
          {...rest}
        >
          <Text color={"black"} fontSize={14}>
            Text
          </Text>
        </MenuButton>
        <MenuList>
          <MenuItem minH="48px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://placekitten.com/100/100"
              alt="Fluffybuns the destroyer"
              mr="12px"
            />
            <span>Fluffybuns the Destroyer</span>
          </MenuItem>
          <MenuItem minH="40px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://placekitten.com/120/120"
              alt="Simon the pensive"
              mr="12px"
            />
            <span>Simon the pensive</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
