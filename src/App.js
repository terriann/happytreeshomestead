import React from 'react';
import Header from './layout/header';
import Body from './layout/body';
import Hero from './components/hero';
import Intro from './components/intro';
import Footer from './layout/footer';
import './App.scss';

function App() {
  return (
    <div className="App">

      <Header />
      <Body>
          <Hero />
          <Intro />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
