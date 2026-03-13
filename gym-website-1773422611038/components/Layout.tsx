import Head from 'next/head';
import Nav from './Nav';

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;