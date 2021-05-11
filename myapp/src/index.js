import React from 'react'
import ReactDom from 'react-dom'

// functional Component 
// function Greetings(){
//   return <h4>First Component Creation updates</h4>;
// }

// another way of creating the Greetings() function
// const Greetings = () => {
//   return React.createElement('h1', {}, 'Hello World');
// };

// arrow function implementing more than one html tags
const Greetings = () => {
  return React.createElement('div', {}, React.createElement('h1', {}, 'hello world'));
}

// Render the component 
// In this case the first attribute defines the component and second one shows where to render
ReactDom.render(<Greetings/>, document.getElementById('root'));