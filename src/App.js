import React from 'react';
import Datos from './components/Datos';
import Eventos from './components/Eventos';
import ApiRickAndMorty from './components/ApiRickAndMorty';

const App = () => {
return (
  <div className='container'>
    <h1 className="text-warning">React componente App</h1>
    <h2>Compontente de Datos</h2>
    {/* <Datos /> */}
    <h2 className='text-danger'>Compontente de Eventos</h2>
    {/* <Eventos /> */}
    <h2 className='text-info'>Compontente ApiRickAndMorty</h2>
    <ApiRickAndMorty />
  </div>

);

}

export default App;