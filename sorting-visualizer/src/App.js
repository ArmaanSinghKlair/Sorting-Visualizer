import React from 'react';
import './App.css';
import SortingVisualizer from './SortingVisualizer';
function App() {
  return (
    <>
      {
      window.innerWidth > 500 ?
      <SortingVisualizer />
      : (
        <h1 style={{textAlign: "center"}}>Screen size too small!! Please open in a bigger Screen</h1>
      )
      }
    </>
  );
}

export default App;
