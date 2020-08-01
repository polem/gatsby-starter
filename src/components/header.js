import { Link as GatbyLink } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useCallback, useLayoutEffect, useRef } from "react"

import { Container, Heading, Link, Box } from "@chakra-ui/layout"
import { useStyleConfig } from "@chakra-ui/core"

import styled from '@emotion/styled';


const StickyHeader = ({ isVisible = false, children, ...props }) => {
  const styles = useStyleConfig("StickyHeader", {
    size: null,
    variant: null,
  });

  return (
    <Box bg="black" color="white" position="fixed" top="0px" left="0px" width="100%" sx={styles.wrapper} {...props} >
      <Container sx={styles.container}>
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


const Header = ({ siteTitle, size, variant, ...props }) => {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const domEl = useRef();

  const styles = useStyleConfig("Header", {
    size,
    variant,
  });

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
      <Box as="header"  ref={domEl} {...props} sx={styles.wrapper}>
        <Container sx={styles.container}>
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
