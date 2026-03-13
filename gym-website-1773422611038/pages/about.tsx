import Head from 'next/head';
import Layout from '../components/Layout';
import AboutSection from '../components/AboutSection';

const About: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn about our gym" />
      </Head>
      <AboutSection />
    </Layout>
  );
};

export default About;