import React, { Component }  from 'react';
import db from '../src/Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

import AppRouter from './Components/Router/AppRouter/AppRouter'

function App() {
  return (
   <AppRouter />
  );
}

export default App;
