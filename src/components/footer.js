import React from "react"

import { Container, Link, Box } from "@chakra-ui/layout"

const Footer = ({ ...props }) => (
  <Box as="footer" bg="gray.400" color="white" {...props}>
    <Container py={4} textAlign="center">
      © {new Date().getFullYear()}, Built with
      {` `}
      <Link isExternal href="https://www.gatsbyjs.org">Gatsby</Link>
    </Container>
  </Box>
)

export default Footer
