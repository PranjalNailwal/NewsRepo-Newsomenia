import React from 'react';
import './App.css';
import NewsList from './Component/NewsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Newsomenia News</h1>
      </header>
      <main>
        <NewsList />
      </main>
    </div>
  );
}

export default App;
