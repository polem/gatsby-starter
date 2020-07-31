import { Link as GatbyLink } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Container, Heading, Link, Box } from "@chakra-ui/layout"

const Header = ({ siteTitle, ...props }) => (
  <Box as="header" bg="black" color="white" {...props}>
    <Container py={8} >
      <Heading>
        <Link
          as={GatbyLink}
          to="/"
        >
          {siteTitle}
        </Link>
      </Heading>
    </Container>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
