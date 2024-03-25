import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './components/Card.jsx'


let myArr = [1,2,3]


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Card username="Umaima" newButton="click me " someArr={myArr}/>
    
  </React.StrictMode>,
)
