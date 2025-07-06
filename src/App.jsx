import React, { useState } from 'react';
import "./App.css";
import AppRouter from './router';
import { AppContextProvider } from './context/context';

function App(){
  return (
    <div>
      <AppContextProvider>
        <AppRouter />  
      </AppContextProvider>
    </div>
  );
};

export default App;