import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Gym Website</title>
        <meta name="description" content="Professional Gym Website" />
        <meta name="keywords" content="gym, fitness, exercise" />
      </Head>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
};

export default Home;