import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EmailForm from '../components/EmailForm';
import SlideShow from '../components/SlideShow';

var settings = {
  images: [
    { url: require('../assets/images/bg11.jpg'), position: 'center' },
    { url: require('../assets/images/bg01.jpg'), position: 'center' },
    { url: require('../assets/images/bg12.jpg'), position: 'center' },
    { url: require('../assets/images/bg02.jpg'), position: 'center' },
    { url: require('../assets/images/bg13.jpg'), position: 'center' },
    { url: require('../assets/images/bg03.jpg'), position: 'center' },
    { url: require('../assets/images/bg14.jpg'), position: 'center' },
    { url: require('../assets/images/bg04.jpg'), position: 'center' },
    { url: require('../assets/images/bg15.jpg'), position: 'center' },
    { url: require('../assets/images/bg05.jpg'), position: 'center' },
    { url: require('../assets/images/bg16.jpg'), position: 'center' },
    { url: require('../assets/images/bg06.jpg'), position: 'center' },
    { url: require('../assets/images/bg17.jpg'), position: 'center' },
    { url: require('../assets/images/bg07.jpg'), position: 'center' },
    { url: require('../assets/images/bg18.jpg'), position: 'center' },
    { url: require('../assets/images/bg08.jpg'), position: 'center' },
    { url: require('../assets/images/bg19.jpg'), position: 'center' },
    { url: require('../assets/images/bg09.jpg'), position: 'center' },
    { url: require('../assets/images/bg20.jpg'), position: 'center' },
    { url: require('../assets/images/bg10.jpg'), position: 'center' },
  ],
  // Delay.
  delay: 6000,
};

const IndexPage = () => (
  <Layout>
    <Header />
    <EmailForm />
    <Footer />
    <SlideShow settings={settings} />
  </Layout>
);

export default IndexPage;
