import React from 'react';
import style from './styles/app.module.css';
import Logo from './img/Henry Icono.png';

function App() {
  return (
    <div className={style.div} >
        <p className={style.p} > Hola! Soy el boilerplate 🤪 </p>
        <img src={Logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;

