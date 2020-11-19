import './App.css';
import React from 'react'
import Layout from "./hoc/Layout";

function App() {
  return (
    <Layout>


      <div style={{ width: '400px', border: '2px solid black'}}>
        <h1>Layout works</h1>
      </div>
    </Layout>
  );
}

export default App;
