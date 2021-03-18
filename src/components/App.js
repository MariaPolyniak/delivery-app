import React from 'react';
import Container from './Container';
import Header from './Header';
import MenuList from './MenuList';
import SideBar from './SideBar';
import Footer from './Footer';

function App() {
  return (
    <Container>
      <Header />
      <MenuList />
      <SideBar />
      <Footer />
    </Container>
  );
}

export default App;
