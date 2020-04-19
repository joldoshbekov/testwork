import React from 'react';
import Dashboard from '../src/screens/dashboard';
import Contact from '../src/screens/contact';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Dashboard />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
