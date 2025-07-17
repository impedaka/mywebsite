import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
//import { BioSection, BioYear } from '../components/bio'
import Layout from "../components/layouts/article";
import Section from "../components/section";
//import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Alice Yu (俞钦枫)
          </Heading>
          <p>Email: a229yu@uwaterloo.ca</p>
        </Box>
      </Box>
      <br/>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
        Hi, I’m Alice, a sophomore studying Math at UWaterloo. I mostly build with React.js and Python, and I'm especiallyinterested in LLMs and NLP.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} bg="black" color="white">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Reading, Learning Mandarin, Coding, Digital art, Running, Anime
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Links
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/impedaka" target="_blank">
              <Button
                variant="ghost"
                color="#A63838"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @impedaka
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/alice-yu-a07630204/"
              target="_blank"
            >
              <Button
                variant="ghost"
                color="#A63838"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @impedaka
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/impedaka" target="_blank">
              <Button
                variant="ghost"
                color="#A63838"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @impedaka
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
);

export default Home;
