import React, { Component } from 'react'; // import due to the JSX (React.createElement() instead of <div ...>)
import './App.css';

class App extends Component {
  // various life-cycle methods to bring dynamic behaviour (state or properties, ...)
  // note: child component can just read the props, but cannot modify them
  state = {
    currentClass: '',
    previousClass: ''
  }


// sets state object to different values which are used by the divs bellow to change their color  
  setColor = (colorClassName) => () => { // function that returns a function
     // DO NOT this.state.currentClass = 'red' !!!
     this.setState({
        previousClass: this.state.currentClass,
        currentClass: colorClassName
      })
   }
 

// commentary in JS are standard, but in JSX (starting by < character to declare a tag) is {/**/} cause
// curly braces means "here is JavaScript" code

  /*setRed = () => {
    this.setState({ color: 'App-red'})
  }
*/
  setBlue = () => {
    this.setColor('App-blue')() // calling a function that returns a function
  }

  render() {
    const {currentClass, previousClass} = this.state // destructuring assignment the same like the following:
    // const currentClass = this.state.currentClass;

    return (
      <div className="App">

        
         <button onClick={this.setColor('App-red')}>Red</button>
         <button onClick={this.setBlue}>Blue</button>
         <button onClick={this.setColor('App-orange')}>Orange</button>
        
        { /* // curly braces means "processing in a JavaScript way"
         <button onClick={this.setRed}>Red</button>
         <button onClick={this.setBlue}>Blue</button>
       */ }

        

        <div className={`App-output App-output1 ${currentClass}`}/> {/* String literals syntax */}
        <div className={'App-output App-output2 ' + currentClass}>Lorem ipsum ...</div> {/* without String literals syntax */}
        
      </div>
    );
  }
}

export default App;
