import React from "react"
import { Link as GatsbyLink } from "gatsby"

import Layout from "@components/layout"
import SEO from "@components/seo"
import { Link, Heading, Text, Divider } from "@chakra-ui/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading as="h1" size="lg" mb={4}>Hi people</Heading>
    <Text>Welcome to your new Gatsby site.</Text>
    <Text>Now go build something great.</Text>

    <Heading as="h1" size="lg" mb={4}>Hi people</Heading>
    <Text>Welcome to your new Gatsby site.</Text>
    <Text>Now go build something great.</Text>

    <Heading as="h1" size="lg" mb={4}>Hi people</Heading>
    <Text>Welcome to your new Gatsby site.</Text>
    <Text>Now go build something great.</Text>
  </Layout>
)

export default IndexPage
