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
            Alice Yu
          </Heading>
          <p>Highschooler ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="https://yt3.googleusercontent.com/fIOy1m553XVOxm0sAYMrXGNtXmV-z4Sxmr0gknLyHYyli_TLJejA0460Xg5mUMzBv3Una9LTroA=s900-c-k-c0x00ffffff-no-rj"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          I'm a web developer and digital artist based in Windsor, Canada.
          Currently a senior at Vincent Massey Secondary School. I'm always open
          to challenges and constructive feedback.
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
          Coding, Kpop, Drawing, Learning, Working Out, Reading, Machine
          Learning
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
