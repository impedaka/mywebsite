import { Container, Heading, SimpleGrid, Divider,Link } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { HackGridItem, WorkGridItem } from "../components/grid-item";

import sushiPreview from "../public/images/works/sushiPreview.png";
import classPreview from "../public/images/works/classAi.png";
import helloPreview from "../public/images/works/hellosign.png";
import cancerPreview from '../public/images/works/cancer.png'

import fire from '../public/images/works/fire.png'
import arread from '../public/images/works/arread.png'
import space from '../public/images/works/space.png'
import mediquick from '../public/images/works/mediquick.png'
import pomo from '../public/images/works/pomo.png'
import all from '../public/images/works/alliance.png'
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
          <HackGridItem
            id="https://devpost.com/software/hellosign-st5bx4"
            thumbnail={helloPreview}
            title="helloSign"
          >
           Learn ASL in a fun and interactive way with machine learning.
          </HackGridItem>
        </Section>
        <Section delay={0.3}>
          <HackGridItem id="https://devpost.com/software/classai" thumbnail={classPreview} title="ClassAi">


          Ai enabled Classroom
          </HackGridItem>
        </Section>
        <Section delay={0.3}>

          <HackGridItem  id="https://devpost.com/software/breast-cancer-care" thumbnail={cancerPreview} title="Cancer Care">
          Assess symptoms. Share stories. Support friends
          </HackGridItem>
        </Section>
        <Section delay={0.3}>
          <HackGridItem  id="https://devpost.com/software/spaceo" thumbnail={space} title="Spaceo">
          Discover space missions
          </HackGridItem>
        </Section>
        <Section delay={0.3}>
          <HackGridItem  id="https://devpost.com/software/firends" thumbnail={fire} title="Firends">
          Awesome chatting application for firefighters :D
          </HackGridItem>
        </Section>
        <Section delay={0.3}>
          <HackGridItem  id="https://devpost.com/software/healthaholic" thumbnail={pomo} title="Healthaholic">
          A Pomodoro timer with stress-relieving reminders for a healthy state of mind. 
          </HackGridItem>
        </Section>
        <Section delay={0.3}>
          <HackGridItem  id="https://devpost.com/software/areading" thumbnail={arread} title="AReading">
          Introduce kids to the most beloved classic stories in the most immersive way. 
          </HackGridItem>
        </Section>
        <Section delay={0.3}>
          <HackGridItem  id="https://devpost.com/software/mediquick" thumbnail={mediquick} title="Mediquick">
          Let's stop the deaths, shall we? 
          </HackGridItem>
        </Section>
      </SimpleGrid>
        <Section delay={0.3}>
          <HackGridItem  id="https://devpost.com/software/alliance-2ezfyd" thumbnail={all} title="Alliance">
          Meeting people within STEM similar interests does not have to be hard.  
          </HackGridItem>
        </Section>
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
