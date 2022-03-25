import { Container, Heading, SimpleGrid, Divider,Link } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import sushiPreview from "../public/images/works/sushiPreview.png";
import classPreview from "../public/images/works/classAi.png";
import helloPreview from "../public/images/works/helloSign.png";
import cancerPreview from '../public/images/works/cancer.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Personal
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="sushiResturant" title="Sushi Resturant" thumbnail={sushiPreview}>
           Place orders and proceed to checkout.
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Hackathons
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={helloPreview}
            title="helloSign"
          >
           Learn ASL in a fun and interactive way with machine learning.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={classPreview} title="ClassAi">
          Ai enabled Classroom
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>

          <WorkGridItem  thumbnail={cancerPreview} title="Cancer Care">
          Assess symptoms. Share stories. Support friends
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      </Section>
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        More Will Be Added In The Future!
      </Heading>
<br/>
    </Container>
  </Layout>
);

export default Works;
