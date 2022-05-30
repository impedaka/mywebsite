import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="sushiResturant">
    <Container>
      <Title>
        Sushi Resturant <Badge>2021-</Badge>
      </Title>
      <P>Search and learn more about pokemon with the Pokemon Api!</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://pookedex.vercel.app/">
            https://pookedex.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>

          <Link href="https://github.com/impedaka/pokedex">
            https://github.com/impedaka/pokedex <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, TypeScript, Pokemon API</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/pokedex1.png" alt="Sushi" />
      <WorkImage src="/images/works/pokedex.png" alt="Sushi" />
    </Container>
  </Layout>
);

export default Work;
