import React, {useMemo} from 'react';
import {Component, Stage} from 'react-ngl';

function App() {

  const reprList = useMemo(() => [{
    type: 'cartoon'
  }], []);

  return (
      <div role='app' className='App'>
        <div className='model-viewport-container'>
          <Stage width='600px' height='400px'>
            <Component path='rcsb://4hhb' reprList={reprList} />
          </Stage>
        </div>
      </div>
  );
}

export default App;
