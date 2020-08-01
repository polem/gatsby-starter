import { Link as GatbyLink } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useCallback, useLayoutEffect, useRef } from "react"

import { Container, Heading, Link, Box } from "@chakra-ui/layout"

import styled from '@emotion/styled';


const StickyHeader = ({ isVisible = false, children, ...props }) => {
  return (
    <Box bg="black" color="white" position="fixed" top="0px" left="0px" width="100%" {...props} >
      <Container py={4}>
        { children }
      </Container>
    </Box>
  )
}

const StyledStickyHeader = styled(StickyHeader)(
  `
    transition: transform .4s;
    transform: translate(0, -100%);
  `,
  props => props.isVisible && `transform: translate(0, 0);`
)

const Header = ({ siteTitle, ...props }) => {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const domEl = useRef();

  const onIntersec = useCallback(entries => {
    
    entries.forEach(entry => {
      if (!domEl.current || entry.target !== domEl.current) {
        return;
      }
      setHeaderScrolled(!entry.isIntersecting);
      
    });
  }, [setHeaderScrolled]);

  const observer = useRef(false);

  useLayoutEffect(() => {
    if (!observer.current) {
      observer.current = new IntersectionObserver(onIntersec)
    }

    observer.current.observe(domEl.current)

    return () => observer.current.disconnect()
  }, [onIntersec]);

  return (
    <>
      <Box as="header" bg="black" color="white" ref={domEl} {...props} >
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
      <StyledStickyHeader isVisible={headerScrolled}>
        <Link
          as={GatbyLink}
          to="/"
        >
          {siteTitle}
        </Link>
      </StyledStickyHeader>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
