import { extendTheme } from "@chakra-ui/react";
import { generateColorset } from "./newColor";

const red = "#FF0000";
const blue = "#3978d2";
const green = "#008000";

export const customTheme = extendTheme({
  colors: {
    mainColor: blue,
    brand: {
      100: generateColorset(blue)[0],
      200: generateColorset(blue)[1],
      300: generateColorset(blue)[2],
      400: generateColorset(blue)[3],
      500: generateColorset(blue)[4],
      600: generateColorset(blue)[5],
    },
    secondColor: red,
    secondBrand: {
      100: generateColorset(red)[0],
      200: generateColorset(red)[1],
      300: generateColorset(red)[2],
      400: generateColorset(red)[3],
      500: generateColorset(red)[4],
      600: generateColorset(red)[5],
    },
  },
  Button: {
    baseStyle: {
      w: "100px",
      h: "35px",
      bg: "mainColor",
      borderRadius: 0,
    },
    Checkbox: {
      baseStyle: {
        size: "lg",
      },
    },
  },
});
