import Head from "next/head";
import dynamic from "next/dynamic";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";
import VoxelDogLoader from "../voxel-dog-loader";

const LazyVoxelDog = dynamic(() => import("../voxel-dog"), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} > 
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Alice's homepage" />
        <meta name="author" content="Alice Yu" />
        <meta name="author" content="Alice Yu" />
        <link rel="apple-touch-icon" href="https://meeluf.crd.co/assets/images/image01.jpg?v=a57a04b6" />
        <link rel="shortcut icon" href="https://meeluf.crd.co/assets/images/image01.jpg?v=a57a04b6"
 type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Alice Yu's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Alice Yu - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14} bg="white" borderRadius='lg'>
        <LazyVoxelDog />

        {children}

        <Footer />
        <br/>
      </Container>
    </Box>
  );
};

export default Main;
