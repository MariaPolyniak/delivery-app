import React, { useEffect } from 'react';
import Container from './Container';
import Header from './Header';
import MenuList from './MenuList';
import SideBar from './SideBar';
import Footer from './Footer';

function App() {
  useEffect(() => {
    fetch('https://api.jsonbin.io/b/605347b3683e7e079c53b0cc', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'secret-key':
          '$2b$10$Z/bNYzk9LegF44CW8Q1JMOSeBeZuxgFpINTLWRGmZwE.YKxHWKpmW',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

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
