import Head from 'next/head';
import Layout from '../components/Layout';
import ContactSection from '../components/ContactSection';

const Contact: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us" />
      </Head>
      <ContactSection />
    </Layout>
  );
};

export default Contact;