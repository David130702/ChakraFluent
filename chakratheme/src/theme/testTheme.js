// theme.js

// 1. import `extendTheme` function

import { extendTheme } from "@chakra-ui/react";

import { mode, whiten, darken } from "@chakra-ui/theme-tools";

const colors = {
  accent: {
    black: "#000000", //black

    white: "#ffffff", //white

    red: "#fc8181", //red f.ex. for error messages

    "electric-blue": "#7ff1fe", //light-blue

    "summer-sky": "#2eaae2", //medium-blue

    "dark-cerulean": "#0c4671", //dark-blue

    yellow: "#feff01", //yellow

    charcoal: "#4d4d4d", //dark-grey

    pewter: "#8f958f", //medium-grey

    casper: "#b0b5bb", //light-grey

    platinum: "#e6e7e9", //white-grey
  },
};

const styles = {
  global: ({ colorMode }) =>
    colorMode === "dark"
      ? {
          body: {
            bg: "accent.black",

            color: "accent.platinum",
          },

          _placeholder: { color: "accent.charcoal" },
        }
      : {
          //Progress bar

          "div.progressBar": {
            backgroundColor: whiten("accent.casper", 60),
          },
        },
};

const fonts = {
  heading: "Roboto, sans-serif",

  body: "Roboto, sans-serif",
};

// 2. Add your color mode config

const config = {
  initialColorMode: "dark",

  useSystemColorMode: false,
};

const BaseCard = {
  baseStyle: (props) => ({
    backgroundColor: mode(
      whiten("accent.platinum", 50),

      darken("accent.charcoal", 20)
    )(props),
  }),

  variants: {
    highlighted: (props) => ({
      backgroundColor: mode(
        whiten("accent.platinum", 0),

        darken("accent.charcoal", 10)
      )(props),

      border: "1px",

      borderColor: mode("accent.summer-sky", "accent.yellow")(props),
    }),
  },
};

const SortHeader = {
  baseStyle: (props) => ({
    color: mode("accent.summer-sky", "accent.yellow")(props),
  }),
};

const Tooltip = {
  baseStyle: (props) => ({
    backgroundColor: mode(
      "accent.dark-cerulean",

      "accent.electric-blue"
    )(props),
  }),
};

const Input = {
  baseStyle: {
    field: {
      bg: "accent.platinum",

      backgroundColor: mode("accent.white", "accent.platinum"),

      color: "accent.black",

      borderRadius: "sm",

      borderColor: "accent.charcoal",
    },
  },
};

const Textarea = {
  baseStyle: {
    bg: "accent.platinum",

    backgroundColor: mode("accent.white", "accent.platinum"),

    color: "accent.black",

    borderRadius: "sm",

    borderColor: "accent.charcoal",
  },
};

const NumberInput = {
  baseStyle: {
    field: {
      bg: "accent.platinum",

      backgroundColor: mode("accent.white", "accent.platinum"),

      color: "accent.black",

      borderRadius: "sm",

      borderColor: "accent.charcoal",
    },
  },
};

const Select = {
  baseStyle: {
    field: {
      bg: mode("accent.white", "accent.platinum"),

      backgroundColor: mode("accent.white", "accent.platinum"),

      "> option": {
        bg: mode("accent.white", "accent.platinum"),
      },

      color: "accent.black",

      borderRadius: "sm",

      borderColor: "accent.charcoal",
    },
  },
};

const SidebarNavigationItem = {
  baseStyle: (props) => ({
    backgroundColor: mode(
      whiten("accent.platinum", 50),

      darken("accent.charcoal", 20)
    )(props),

    p: "2",

    d: "flex",

    justifyContent: "center",

    mb: "1",

    fontSize: "xl",

    _hover: {
      // fontSize: "lg",
      //color: colorMode === "dark" ? "yellow.400" : "yellow.600",
    },

    _active:
      props.colorMode === "dark"
        ? { color: "accent.electric-blue" }
        : { color: "accent.summer-sky" },

    borderColor:
      props.colorMode === "dark" ? "accent.dark-cerulean" : "accent.summer-sky",
  }),
};

const Breadcrumb = {
  parts: ["item", "separator"],

  baseStyle: (props) => ({
    separator: {
      color: mode("accent.dark-cerulean", "accent.yellow")(props),
    },

    item: {
      color: "accent.summer-sky",
    },
  }),
};

const Checkbox = {
  parts: ["control"],

  baseStyle: () => ({
    control: {
      borderColor: "accent.charcoal",
    },
  }),
};

const Radio = {
  parts: ["control"],

  baseStyle: () => ({
    control: {
      borderColor: "accent.charcoal",
    },
  }),
};

const Button = {
  baseStyle: (props) => ({
    borderRadius: "sm",

    py: 1,

    px: 2,

    fontWeight: "semibold",

    color: mode("accent.dark-cerulean", "accent.yellow")(props),
  }),

  variants: {
    outline: (props) => ({
      border: "sm",

      borderColor: mode("accent.yellow", "accent.yellow")(props),
    }),

    primary: (props) => ({
      fontWeight: "semibold",

      color: mode("accent.yellow", "accent.dark-cerulean")(props),

      bg: mode("accent.dark-cerulean", "accent.yellow")(props),

      _hover: {
        color: mode("accent.yellow", "accent.dark-cerulean")(props),

        bg: mode("accent.dark-cerulean", "accent.yellow")(props),
      },
    }),
  },
};

const Editor = {
  baseStyle: () => ({
    borderColor: "blue",

    borderRadius: "md",

    border: "1px",

    ".ql-toolbar": {
      px: 0,

      pt: 3,

      pb: 2,

      border: "0",

      borderBottom: "1px",

      borderBottomColor: "accent.casper",

      height: "30px",

      d: "flex",

      alignItems: "center",

      fontWeight: "semibold",
    },

    ".ql-container": {
      border: "0",
    },

    ".ql-editor": {
      mt: 0,

      py: 2,

      fontSize: "md",

      border: 0,
    },

    ".ql-picker": {
      color: "accent.black",
    },

    color: "accent.black",

    bg: mode("accent.white", "accent.platinum"),
  }),
};

const Tabs = {
  parts: ["tabs", "tabpanel", "tablist", "tab", "tabpanels"],

  baseStyle: (props) => ({
    tab: {
      m: "0",

      mr: "2",

      bg: mode(
        whiten("accent.platinum", 50),

        darken("accent.charcoal", 20)
      )(props),

      _selected: {
        color: mode("accent.summer-sky", "accent.yellow")(props),
      },
    },

    tablist: {
      pb: "2",

      mb: "3",

      borderBottom: "1px solid",

      borderColor: mode("accent.summer-sky", "accent.yellow")(props),
    },

    tabpanels: {},

    tabpanel: {
      p: "0",
    },
  }),
};

const Calendar = {
  baseStyle: (props) => ({
    ".rbc-calendar": {
      width: "100%",
    },

    ".rbc-month-view": {
      borderColor: "blue",

      borderRadius: "md",

      border: "0",
    },

    ".rbc-header": {
      borderRadius: "md",

      border: "0",
    },

    ".rbc-month-row": {
      borderColor: mode(
        "accent.platiunum",

        darken("accent.charcoal", 20)
      )(props),
    },

    ".rbc-day-bg": {
      //m: "1px",

      backgroundColor: mode(
        whiten("accent.summer-sky", 95),

        "accent.charcoal"
      )(props),

      color: "accent.charcoal",
    },

    ".rbc-day-bg + .rbc-day-bg": {
      //border: "0",

      borderColor: mode(
        "accent.platinum",

        darken("accent.charcoal", 20)
      )(props),
    },

    ".rbc-day-bg.rbc-off-range-bg": {
      backgroundColor: mode(
        whiten("accent.platinum", 60),

        darken("accent.charcoal", 10)
      )(props),
    },

    ".rbc-button-group": {
      borderColor: mode(
        "accent.platinum",

        darken("accent.charcoal", 20)(props)
      ),
    },

    ".rbc-toolbar button": {
      backgroundColor: darken("accent.dark-cerulean", 10),

      color: "#e6e7e9",

      borderColor: mode(
        "accent.platinum",

        darken("accent.charcoal", 20)
      )(props),
    },

    "button.rbc-active": {
      backgroundColor: mode(
        "accent.summer-sky",

        darken("accent.yellow", 10)
      )(props),

      color: mode("#0c4671", "#4d4d4d")(props),
    },

    "button.rbc-hover": {
      backgroundColor: darken("accent.yellow", 10),

      color: "#4d4d4d",
    },

    ".rbc-now": {
      color: mode("#2eaae2", "accent.yellow")(props),
    },

    "a.rbc-show-more": {
      backgroundColor: mode("accent.casper", "accent.dark-cerulean")(props),

      fontWeight: "normal",

      borderRadius: "md",
    },

    /** Weekly view */

    ".rbc-time-content > * + * > *": {
      borderColor: mode(
        "accent.platinum",

        darken("accent.charcoal", 20)
      )(props),
    },

    ".rbc-day-slot": {
      bg: mode(
        whiten("accent.summer-sky", 95),

        darken("accent.charcoal", 10)
      )(props),
    },

    ".rbc-day-slot.rbc-time-column.rbc-now.rbc-today": {
      bg: mode(whiten("accent.platinum", 60), "accent.charcoal")(props),
    },

    ".rbc-timeslot-group": {
      border: 0,
    },

    ".rbc-time-slot": {
      borderTop: "1px solid",

      borderColor: mode(
        "accent.platinum",

        darken("accent.charcoal", 20)
      )(props),
    },

    ".rbc-time-view": {
      border: 0,
    },

    ".rbc-time-header-content": {
      borderLeft: "1px",

      borderColor: mode(
        "accent.platinum",

        darken("accent.charcoal", 20)
      )(props),
    },

    ".rbc-header.rbc-today": {
      backgroundColor: mode(
        "accent.platinum",

        darken("accent.charcoal", 20)
      )(props),

      color: mode("accent.summer-sky", "accent.yellow")(props),
    },

    ".rbc-time-content": {
      border: 0,
    },
  }),
};

const overrides = {
  config,

  colors,

  fonts,

  styles,

  components: {
    BaseCard,

    Button,

    Editor,

    Input,

    Select,

    SidebarNavigationItem,

    Tabs,

    Checkbox,

    Calendar,

    NumberInput,

    Radio,

    Tooltip,

    Textarea,

    Breadcrumb,

    SortHeader,
  },
};

export default extendTheme(overrides);
