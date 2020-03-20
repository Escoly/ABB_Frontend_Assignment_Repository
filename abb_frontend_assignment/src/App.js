import React from 'react';
import './App.css';
import Part from './components/Part/index.js'

function App() {
  return (
    <div className="App">
      <Part namePart={'Part A'} features={['Seam', 'Sot', 'Hole']}/>
    </div>
  );
}

export default App;
