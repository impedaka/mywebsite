import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Link,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { HackGridItem, WorkGridItem } from "../components/grid-item";

import sushiPreview from "../public/images/works/sushiPreview.png";
import cafePreview from "../public/images/works/cafe2.png";
import pokedexPreview from "../public/images/works/pokedex1.png";
import classPreview from "../public/images/works/classAi.png";
import helloPreview from "../public/images/works/hellosign.png";
import cancerPreview from "../public/images/works/cancer.png";
import sumPreview from "../public/images/works/sumnotes.png";
import foxPreview from "../public/images/works/foxpreview.png";
import paintPreview from "../public/images/works/paint.png";

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Personal
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="fakecafe" title="FakeCafe" thumbnail={cafePreview}>
            Order and checkout at a very fake cafe!
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="pokedex" title="Pokedex" thumbnail={pokedexPreview}>
            Search and learn more about pokemon!
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="sushiResturant"
            title="Sushi Resturant"
            thumbnail={sushiPreview}
          >
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
            <HackGridItem
              id="https://devpost.com/software/sumnotes-qzpoth"
              thumbnail={sumPreview}
              title="helloSign"
            >
              Summarize Notes from Youtube videos
            </HackGridItem>
          </Section>
          <Section delay={0.3}>
            <HackGridItem
              id="https://devpost.com/software/hellosign-st5bx4"
              thumbnail={helloPreview}
              title="helloSign"
            >
              Learn ASL in a fun and interactive way with machine learning.
            </HackGridItem>
          </Section>
          <Section delay={0.3}>
            <HackGridItem
              id="https://devpost.com/software/classai"
              thumbnail={classPreview}
              title="ClassAi"
            >
              Ai enabled Classroom
            </HackGridItem>
          </Section>
          <Section delay={0.3}>
            <HackGridItem
              id="https://devpost.com/software/breast-cancer-care"
              thumbnail={cancerPreview}
              title="Cancer Care"
            >
              Assess symptoms. Share stories. Support friends
            </HackGridItem>
          </Section>
        </SimpleGrid>
      </Section>
      <Divider my={6} />

      <Heading as="h3" fontSize={20} mb={4}>
        High School
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <HackGridItem
            id="https://github.com/impedaka/ICS3U-FSE"
            thumbnail={foxPreview}
            title="helloSign"
          >
            Runner game made with pygame
          </HackGridItem>
        </Section>
        <Section delay={0.3}>
          <HackGridItem
            id="https://github.com/impedaka/Paint"
            thumbnail={paintPreview}
            title="helloSign"
          >
            MS paint pygame clone
          </HackGridItem>
        </Section>
      </SimpleGrid>
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        More Will Be Added In The Future!
      </Heading>
      <br />
    </Container>
  </Layout>
);

export default Works;
