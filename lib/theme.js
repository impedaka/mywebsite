import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#e9e6e9", "#e9e6e9")(props),
    },

  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#ffb5ab",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
        color: "#474747"
      },
    },
  },
  //text
  Link: {
    baseStyle: (props) => ({
      color: mode("#ffb5ab", "#ffb5ab")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'Inter'",
  color: "#474747"
};

const colors = {
  grassTeal: "#88ccca",
};



const theme = extendTheme({ styles, components, fonts, colors });
export default theme;
//#FFE8EC
