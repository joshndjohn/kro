import React from 'react';
import ReactDOM from 'react-dom/client'
import 'tachyons'
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);












//State
//State means the description of your app. It is simply an object that describes your application. State is able to change. It's not static like props. props are simply things that come out of state.  States always live in the parent component.
//props are simply thing that come out of state. A parent feeds state into a child component and as soon as the child component receives the state, it's a property and the child cannot change the property
// const state = {
//   robots: robots,
//   searchField: ''
// }

// class App extends React.Component/*shortcut can be used ,{component}*/ {
//   constructor() {
//     super()
//     this.state = {
//   robots: robots,
//   searchField: ''
// }
//   }
//   render() {
//     <div className='tc'>
//         <h1>RoboFriends</h1>
//         <SearchBox />
//         <Robotlist />
//     </div>
//   }
// }

// OnSearchChange (e) {
//     console.log(e)
// }



/*** INTERACTIVITY */
// The interactivity we want to achieve is one such that whenever something is typed into the search box and it matches any of the robots, only the robots matched should be displayed. If nothing is entered, all robots would be displayed the way it is initially.
// To achieve this, we need to import useState in the App component because it is the main component that handles interactions between children components. In this cas we want the SearchBox component to interact with theRobotlist component.


// JSON (JavaScript Object Notation) is data representation format. It is commonly used for APIs and configs