import Robotlist from './components/Robotlist';
import SearchBox from './components/SearchBox';
 import { robots } from './robots'
import { useState } from 'react'
import './app.css'
import Scroll from './components/Scroll';
// import robots from './export.json'

const App = () => {
  const [searchField, setSearchField] = useState('');

  const onSearchChange = e => setSearchField(e.target.value);

  // const filteredRobots = robots.filter(
  //       (robot) =>  robot.name.toLowerCase().includes(searchField.toLowerCase()) ||  robot.email.toLowerCase().includes(searchField.toLowerCase()) || robot.username.toLowerCase().includes(searchField.toLowerCase()));




const data = ['name', 'username', 'email']
// console.log(robots[0]['email'])

const filteredRobots = robots.filter((robot) => data.some(entry => robot[entry].toLowerCase().includes(searchField.toLowerCase())))
 
   return (
    <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <Robotlist roboFilter={filteredRobots} />
        </Scroll>
    </div>
  )
}

export default App



















// const filteredRobots = robots.filter(
//         (robot) =>  robot.name.toLowerCase().includes(searchField.toLowerCase()) || robot.email.toLowerCase().includes(searchField.toLowerCase()));





// A cleaner way

// const data = ['name', 'username', 'email']
// //console.log(robots[0]['email'])

// const filteredRobots = robots.filter((robot) => data.some(entry => robot[entry].toLowerCase().includes(searchField.toLowerCase())))





//Fetching the data from a backend server or API
//












// class App extends React.Component/*shortcut can be used ,{component}*/ {
//   constructor() {
//     super()
//     this.state = {
//   robots: robots,
//   searchField: ''
//  }
// }

// OnSearchChange = (e) => {
//     //console.log(e.target.value)
//     const filteredRobot = this.state.robots.filter(robot => {
//       return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
//       console.log(filteredRobot);
//     })
// }
//   render() {
//     return (
//     <div className='tc'>
//         <h1>RoboFriends</h1>
//         <SearchBox searchChange={this.OnSearchChange}/>
//         <Robotlist robots={this.state.robots}/>
//     </div>
//     )
//   }
// }





























































// import React from 'react'

// const App = () => {
//   const comments = [
//     {id:1, text: 'first comment'},
//     {id:2, text: 'second comment'},
//     {id:3, text: 'third comment'}
//   ]

//   const loading = false;
//   const showComments = true;
//   const commentBlock = (
//     <div>
//       <p>Comments ({comments.length})</p>
//       <ol type='a'>
//         {comments.map((comment, i) => {
//           return <li key={i}>{comment.text}</li>
//         })} 
//       </ol>
//     </div>
//   )

//   if(loading) return <h1>loading...</h1>

//   return (
//     <div>
//       {showComments && commentBlock}
//     </div>
//   )
// }

// export default App
