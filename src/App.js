import React from 'react'

import { About, Footer, Header, Skills, Testimonial, Work } from './container/index';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;