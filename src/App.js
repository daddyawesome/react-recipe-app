import React from 'react';

import './App.css';

const App = () =>{

  const APP_ID = "2fa07346";
  const APP_KEY = "93d7e865c25e4663986f41023233bdfe";

  const exampleReq =  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className = "App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>

    </div>
  );
};

export default App;
