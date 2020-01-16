import React, { useState, useEffect }from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import Devform from './components/DevForm';

import api from './services/api';

function App() {
  const [devs,setDevs] = useState([]);
 
  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  },[]);

  function updateDevs(date){
    setDevs([...devs, date]);
  } 

  return (
    <div id='app'>
      <aside>
        <strong>Register</strong>
        <Devform onSubmit={updateDevs} />

      </aside>
      <main>
          <ul>
            {devs.map(dev => (
              <DevItem key={dev._id} dev={dev} />
            ))}
           
          </ul>
      </main>
    </div>
  );
}

export default App;
