import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="sushiResturant">
    <Container>
      <Title>
        Fake Cafe <Badge>2022-</Badge>
      </Title>
      <P>Place orders and proceed to checkout.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://fakecafe.vercel.app/">
            https://fakecafe.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>

          <Link href="https://github.com/impedaka/fakecafe">
            https://github.com/impedaka/fakecafe <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Stripe API, Chakra-UI</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/cafe1.png" alt="Sushi" />
      <WorkImage src="/images/works/cafe4.png" alt="Sushi" />
      <WorkImage src="/images/works/cafe3.png" alt="Sushi" />
      <WorkImage src="/images/works/cafe5.png" alt="Sushi" />
      <WorkImage src="/images/works/cafe6.png" alt="Sushi" />
    </Container>
  </Layout>
);

export default Work;
