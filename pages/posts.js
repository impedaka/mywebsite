import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import img1 from "../public/images/contents/0.png";
import img2 from "../public/images/contents/1.png";
import img3 from "../public/images/contents/2.png";
import img4 from "../public/images/contents/3.png";
import img5 from "../public/images/contents/4.png";
import img6 from "../public/images/contents/5.png";

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Illustrations
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem thumbnail={img1} />
          <GridItem thumbnail={img2} />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem thumbnail={img3} />
          <GridItem thumbnail={img4} />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem thumbnail={img5} />
          <GridItem thumbnail={img6} />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
