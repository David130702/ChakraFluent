import { extendTheme } from "@chakra-ui/react";
import { generateColorset } from "./newColor";

const red = "#FF0000";
const blue = "#3978d2";

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
  components: {
    Button: {
      baseStyle: {
        w: "100px",
        h: "35px",
        color: "White",
        borderRadius: 0,
      },
      defaultProps: {
        colorScheme: "blue",
      },
      variants: {
        iconButton: {
          bg: "none",
          _hover: { bg: "lightgrey" },
          color: "#3978d2",
          w: "auto",
          h: "auto",
          px: 1,
          py: 1,
          fontSize: "25px",
        },
      },
    },
    Checkbox: {
      defaultProps: {
        size: "lg",
      },
    },
    Radio: {
      variants: {
        primary: {
          control: {
            borderColor: "black",
            border: "1px solid black",
            _hover: {},
            _checked: {
              color: "#3978d2",
              borderColor: "#3978d2",
            },
          },
        },
      },
      defaultProps: {
        variant: "primary",
        size: "lg",
        colorScheme: "primary",
      },
    },
    Slider: {
      variants: {
        primary: {
          thumb: {},
          track: {
            bg: "#8a8886",
          },
          filledTrack: {
            bg: "#323130",
            _hover: { bg: "#3978d2" },
          },
        },
      },
      defaultProps: {
        variant: "primary",
        colorScheme: "primary",
      },
    },
    Input: {
      variants: {
        primary: {
          borderRadius: 0,
        },
      },
      defaultProps: {
        variant: "primary",
        size: "lg",
        colorScheme: "primary",
      },
    },
  },
});
