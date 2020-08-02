import baseTheme from "@chakra-ui/theme"

// custom styles
const Button = {
  ...baseTheme.components.Button,
  baseStyle: {
    ...baseTheme.components.Button.baseStyle,
    textTransform: 'uppercase',
  }
};

const Link = {
  ...baseTheme.components.Link,
  baseStyle: {
    ...baseTheme.components.Link.baseStyle,
    textDecoration: 'underline'
  }
};

const Footer = {
  baseStyle: {
    wrapper: {
      bg: 'red.400',
      color: 'white'
    },
    container: {
      textAlign: "center",
      py: 4
    }
  }
}

const StickyHeader = {
  register: {
    parts: ["wrapper", "container"],
    sizes: [],
    variants: [],
  },
  baseStyle: {
    wrapper: {
      bg: "gray.100",
      color: "black",
    },
    container: {
      py: 4
    },
  }
};

const Header = {
  register: {
    parts: ["wrapper", "container"],
    sizes: [],
    variants: [],
  },
  baseStyle: {
    wrapper: {
      bg: "gray.900",
      color: "white",
    },
    container: {
      py: 8
    },
  }
};


const themes = {
  ...baseTheme,
  fonts: {
    ...baseTheme.fonts,
    body: `Droid Sans, ${baseTheme.fonts.body}`,
    heading: `Roboto, ${baseTheme.fonts.heading}`
  },
  components: {
    ...baseTheme.components,
    Button,
    Link,
    Header,
    StickyHeader,
    Footer
  }
}

export default themes;
