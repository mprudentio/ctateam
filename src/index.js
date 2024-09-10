import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ElectricVehicle from './projects/ElectricVehicle';
import MentalHealth from './projects/MentalHealth';
import Pizza from "./projects/Pizza"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './ScrollToTop';
import HR from './projects/HR';
import ABTest from './projects/ABTest';
import Inventory from './projects/Inventory';
import ABSA from './projects/ABSA';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/electric-vehicle" element={<ElectricVehicle />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path='/HR' element={<HR/>}/>
        <Route path='/mental-health' element={<MentalHealth />} />
        <Route path='AB-Testing' element={<ABTest/>}/>
        <Route path='/Inventory' element={<Inventory/>}/>
        <Route path='/Dashboard-ABSA' element={<ABSA/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
