import React from 'react'
import ReactDom from 'react-dom'

// functional Component 
// function Greetings(){
//   return <h4>First Component Creation updates</h4>;
// }

// function Greetings(){
//   return <h4>
//     First Component Creation updates</h4>;
// }

// another way of creating the Greetings() function
// const Greetings = () => {
//   return React.createElement('h1', {}, 'Hello World');
// };

// arrow function implementing more than one html tags
// const Greetings = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'hello world'));
// }

// // arrow function implementation on default component
// function Greetings(){
//   return (
//     <div>
//       <h1>Header 1 element</h1>
//     </div>
//   )
// }

// jsx rules 
// always return a single jsx element
// following case a div is returned
// function Greetings () {
//   return(
//     <div>
//       <h1>Hello world</h1>
//       <ul>
//         <li>hello hashan</li>
//         <li>Hello shash</li>
//       </ul>
//     </div>
//   );
// }

// there will be errors if there are two div or two elements are returened.
// ./src/index.js
// SyntaxError: /Users/thirucumaran/Documents/Web Development/react_basics_tutorial/myapp/src/index.js: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (50:4)
// function Greetings () {
//   return(
//     <React.Fragment>
//       <div>
//       <h1>Div 1 component implemetation</h1>
//     </div>

//     <div>
//       <h1>Div 2 component implementation</h1>
//     </div>
//     </React.Fragment>
//   )
// }

// another alteration for the react fragments 
// function Greetings() {
//   return (
//     <>
//       <div>
//         <h1>Div 1 alternative implementattion</h1>
//       </div>
//       <div>
//         <h1>Div 2 alternative implementation</h1>
//       </div>
//     </>
//   )
// }

// article section alternative method
// function Greetings() {
//   return (
//     <section>
//       <article>
//         <h1>heading 1 aritcle</h1>
//       </article>
//       <article>
//         <h1>heading 1 article another article</h1>
//       </article>
//     </section>
//   )
// }

// components and tools
function Greetings () {
  return (
    <div>
      {/* <h1>John Doe</h1>
      <p>This is my message</p> */}
      <Person/>
      <Message/>
    </div>
  )
}
// creting the component person and 
const Person = () => <h4>John Doe</h4>
const Message = () => <p>This is my message</p>

// Render the component 
// In this case the first attribute defines the component and second one shows where to render
ReactDom.render(<Greetings/>, document.getElementById('root'));