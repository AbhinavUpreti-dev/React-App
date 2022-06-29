
import React from 'react';
import ReactDOM from 'react-dom/client';
import CardList from './GitHubCardApp/CardList';
import Form from './GitHubCardApp/Form';
import testData from './GitHubCardApp/MockData';
// import { useState } from 'react';
// import './App.css';
// import Button from './Button';
// import Display from './Display';

// function App() {
//   const [counter,setCounter] = useState(42);
//   const incrementCounter = (increment)=> setCounter(counter+increment);
//   return (
//     <div className="App">
//      <Button onClickHandle={incrementCounter} increment={1}></Button>
//      <Button onClickHandle={incrementCounter} increment={5}></Button>
//      <Button onClickHandle={incrementCounter} increment={10}></Button>
//      <Display message={counter}></Display>
//     </div>
//   );
// }

// export default App;

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}

export default  App;