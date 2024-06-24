import React from 'react';
import './App.css';
import Header from './components/Header';
import Photo from './components/Photo';
import TextBlock from './components/TextBlock';

function App() {
  return (
    <div className="App">
      <Header />
      <Photo />
      <TextBlock />
    </div>
  );
}

export default App;