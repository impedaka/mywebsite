
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

  <Layout title="paint">
    <Container>
      <Title>
        MS Paint Clone <Badge>2021-</Badge>
      </Title>
      <P>
        Pygame project for ICS3U mid-term. My go-to software to make digital art :) (superior MS Paint)
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/impedaka/Paint">
            https://github.com/impedaka/Paint <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Game engine</Meta>
          <span>Pygame</span>
        </ListItem>
        
      </List>
      <WorkImage src="/images/works/paint.png" alt="Sushi" />

    </Container>
  </Layout>
);

export default Work;