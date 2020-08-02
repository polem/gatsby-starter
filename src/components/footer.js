import React from "react"

import { Container, Link, Box } from "@chakra-ui/layout"
import { useStyleConfig } from "@chakra-ui/core"


const Footer = ({ size, variant, ...props }) => {
  const styles = useStyleConfig("Footer", {
    size,
    variant,
  });
  return (
    <Box as="footer" sx={styles.wrapper} {...props}>
      <Container sx={styles.container}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <Link isExternal href="https://www.gatsbyjs.org">Gatsby</Link>
      </Container>
    </Box>
  )
}

export default Footer
