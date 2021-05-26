import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import PaginaInicial from './components/PaginaInicial/PaginaInicial';

function App() {
  return (
    <div className="App">
      <PaginaInicial/>
      <Button variant="contained" color="primary">
      Hello World
    </Button>
    </div>
  );
}

export default App;
