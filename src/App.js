import React, { useState, useEffect } from "react";
import './App.css'
import { Layout } from 'antd';


import List from "./Components/List";
const { Header, Content } = Layout;

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Layout>
        
        <Header >
          
          <h3 class="h1-test">List Rick and Morty</h3>
      
          
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>

          <List items={items} />
          </div>

        </Content>
      </Layout>
    
    );
  }
}

export default App;
