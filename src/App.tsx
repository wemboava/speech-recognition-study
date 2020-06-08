import React from 'react';
import './App.css';
import SpeechRecognition from './components/speechRecognition';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Fala bem caminhoneiro </h1>
        <img src="https://img.icons8.com/ios/100/FFFFFF/interstate-truck.png" alt="logo"/>
      </div>
      <SpeechRecognition />
    </div>
  );
}

export default App;
