import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <main>
      <h1>Testing Vercel Sample Project</h1>
        <div>
          <Image source={require('https://gfycat.com/warpedsoftdipper)} style={{width: 100, height: 100 }} />
        </div>
    </main>
  );
}

export default App;
