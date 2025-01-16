
import type { PrismTheme } from "prism-react-renderer"

// Latte theme from Catppuccin
// I'm too much of a wuss to push this to NPM, so we're just putting the themes in here!
const lightTheme: PrismTheme = {
  plain: {
    color: "#4C4F69",
    backgroundColor: "#E6E9EF",
  },
  styles: [
    {
      types: ["keyword", "prolog", "doctype", "atrule", "important"],
      style: {
        color: "#8839EF",
      },
    },
    {
      types: ["builtin", "entity", "deleted"],
      style: {
        color: "#D20F39",
      },
    },
    {
      types: ["class-name", "symbol", "attr-name", "namespace"],
      style: {
        color: "#DF8E1D",
      },
    },
    {
      types: ["function", "property", "tag", "selector"],
      style: {
        color: "#1E66F5",
      },
    },
    {
      types: ["boolean", "number", "constant"],
      style: {
        color: "#FE640B",
      },
    },
    {
      types: ["string", "char", "url", "attr-value", "inserted"],
      style: {
        color: "#40A02B",
      },
    },
    {
      types: ["regex"],
      style: {
        color: "#EA76CB",
      },
    },
    {
      types: ["operator"],
      style: {
        color: "#04A5E5",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "#4C4F69",
      },
    },
    {
      types: ["punctuation", "comment"],
      style: {
        color: "#7C7F93",
      },
    },
    {
      types: ["cdata"],
      style: {
        color: "#179299",
      },
    },
    {
      types: ["bold", "important"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
  ],
}

const darkTheme: PrismTheme = {
  plain: {
    color: "#C6D0F5",
    backgroundColor: "#292C3C",
  },
  styles: [
    {
      types: ["builtin", "deleted", "entity"],
      style: {
        color: "#E78284",
      },
    },
    {
      types: ["attr-name", "class-name", "namespace", "symbol"],
      style: {
        color: "#E5C890",
      },
    },
    {
      types: ["function", "property", "selector", "tag"],
      style: {
        color: "#8CAAEE",
      },
    },
    {
      types: ["boolean", "constant", "number"],
      style: {
        color: "#EF9F76",
      },
    },
    {
      types: ["atrule", "doctype", "keyword", "prolog"],
      style: {
        color: "#CA9EE6",
      },
    },
    {
      types: ["important"],
      style: {
        color: "#CA9EE6",
        fontWeight: "bold",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["attr-value", "char", "inserted", "string", "url"],
      style: {
        color: "#A6D189",
      },
    },
    {
      types: ["regex"],
      style: {
        color: "#F4B8E4",
      },
    },
    {
      types: ["operator"],
      style: {
        color: "#99D1DB",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "#C6D0F5",
      },
    },
    {
      types: ["comment", "punctuation"],
      style: {
        color: "#949CBB",
      },
    },
    {
      types: ["cdata"],
      style: {
        color: "#81C8BE",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "#C6D0F5",
      },
    },
  ],
}

export { lightTheme, darkTheme }
