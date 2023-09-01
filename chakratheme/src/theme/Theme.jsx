import { extendTheme } from "@chakra-ui/react";
import { generateColorset } from "./newColor";


const red = "#FF0000";
const blue = "#00FFFF";
const green = "#008000";

export const customTheme = extendTheme({
  
  colors: {
    mainColor: red,
    brand: {
      100: generateColorset(red)[0],
      200: generateColorset(red)[1],
      300: generateColorset(red)[2],
      400: generateColorset(red)[3],
      500: generateColorset(red)[4],
      600: generateColorset(red)[5],
    },
    secondColor: blue,
    secondBrand: {
      100: generateColorset(blue)[0],
      200: generateColorset(blue)[1],
      300: generateColorset(blue)[2],
      400: generateColorset(blue)[3],
      500: generateColorset(blue)[4],
      600: generateColorset(blue)[5],
    },
    mainButton: green,
    buttonBrand: {
      100: generateColorset(green)[0],
      200: generateColorset(green)[1],
      300: generateColorset(green)[2],
      400: generateColorset(green)[3],
      500: generateColorset(green)[4],
      600: generateColorset(green)[5],
    }
  },
});
