import React, {Component} from 'react';
import './App.css';
import TimeInterval from './TimeInterval';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      person: {
        fullName: "Lamine Yamal",
        bio: "Forca Barca",
        imgSrc: '/public/OIF.jpeg', 
        profession: "Footballer"
      },
      shows: false,
    };
  }

  render(){
    const {person,shows} = this.state
    return (
      <div className='App'> 
        <h1>Class Component</h1>
        {shows && ( 
          <div>
            <h2>{person.fullName}</h2>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <button onClick={() => this.setState({shows:!shows})}>
          {shows? "Hide Details" : "Show Details"}
        </button>

      <TimeInterval/>

      </div>

    )
  }
}


export default App;
