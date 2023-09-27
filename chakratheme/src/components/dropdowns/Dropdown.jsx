import { Box, Divider, Select, Text } from "@chakra-ui/react";

export function Dropdown({...rest}) {
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
    <Select w={300} {...rest}>
      {options.map((option, i) => {
        if (option?.itemType === "divider") {
          return <Divider />;
        } else if (option?.itemType === "header") {
          return (
            <option disabled={true} key={i} style={{color: "#3978d2", fontWeight: "semibold", py: "5px"}} value={option?.key}>
              {option?.text}
            </option>)
        } else {
          return (
            <option stylee={{ my: "5px"}} disabled={option?.disabled} key={i} value={option?.key}>
                
            <Box py={"10px"}>
              {option?.text}
              </Box>
            </option>
          );
        }
      })}
    </Select>
  );
}
