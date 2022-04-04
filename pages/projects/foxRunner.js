import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
} from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";

const Work = () => (

  <Layout title="FoxRunner">
    <Container>
      <Title>
        Fox Runner <Badge>2021-</Badge>
      </Title>
      <P>
        Pygame game for ICS3U (FSE). Fox Runner is inspired by Dino Chrome and Flappy Bird.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/impedaka/ICS3U-FSE">
            https://github.com/impedaka/ICS3U-FSE <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Game engine</Meta>
          <span>Pygame</span>
        </ListItem>
        
      </List>
      <WorkImage src="/images/works/foxdemo.png" alt="Sushi" />
      <WorkImage src="/images/works/foxscore.png" alt="Sushi" />
    </Container>
  </Layout>
);

export default Work;
