import React from "react"
import { Link as GatsbyLink } from "gatsby"

import Layout from "@components/layout"
import SEO from "@components/seo"
import { Link, Heading, Text } from "@chakra-ui/layout"
import { Button, Stack } from "@chakra-ui/core";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Stack>
      <Heading as="h1" size="lg">Hi people</Heading>
      <Text>Welcome to your new Gatsby site.</Text>
      <Text>Now go build something great.</Text>
      <Button colorScheme="blue">Test</Button>
    </Stack>
  </Layout>
)

export default IndexPage
