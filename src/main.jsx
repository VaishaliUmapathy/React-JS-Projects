import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'

//import '../src/css/steps.css'
//import '../src/css/profilecard.css'
//import '../src/assets/Cards.css'

//import User from './User.jsx'
import App from './Travel.jsx'
//import App from './components/Friendlist'
//import Counter from './Counter'
//import Cards from './Cards.jsx'
//import Login from './Login.jsx'
//import Cards from './Cards.jsx'
//import DateCounter from './components/DateCounterSlider.jsx'
//import Profilecard from './Profilecard'
//import Header from './ecom/Header';
//import Calculator from'./components/Calculator';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
