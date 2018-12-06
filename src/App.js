import React, { Component } from 'react';
import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm';
import Rank from './components/Rank/rank';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles className="particles"
        params={{
          particles: {
            number: {
              value:30,
              density: {
                enable: true,
                value_area: 200
              }
            }
            
          }
        }}

        
      />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*
        
        <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
