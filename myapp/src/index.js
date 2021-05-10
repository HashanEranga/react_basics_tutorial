import React from 'react'
import ReactDom from 'react-dom'

// functional Component 
function Greetings(){
  return <h4>First Component Creation updates</h4>;
}

// Render the component 
// In this case the first attribute defines the component and second one shows where to render
ReactDom.render(<Greetings/>, document.getElementById('root'));