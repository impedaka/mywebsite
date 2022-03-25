import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Sushi Resturant <Badge>2021-</Badge>
      </Title>
      <P>
        Place orders and proceed to checkout. Features include ordering
        different types of sushi with React Router, viewing the total number of
        items in the cart. Cart features include viewing the total price of the
        items added up, deleting items in the cart and changing the quanity of
        the item. Items are saved and can be viewed in the Firebase. Styled with
        Styled Components
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://sushi-45add.web.app/">
            https://sushi-45add.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Firebase</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/sushi1.png" alt="Sushi" />
      <WorkImage src="/images/works/sushi0.png" alt="Sushi" />
    </Container>
  </Layout>
);

export default Work;
