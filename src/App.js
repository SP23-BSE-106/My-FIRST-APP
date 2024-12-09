
// import './App.css';
// import Fun from './Fun.js';
// import MY from './MY.js';

// function App() {
//   return (
//     <div className='App'><Fun/>
//    <MY/></div>
   
//   );
// }

//  import Greeting from "./Greeting";// Question 1

//  function App  ()  {
//   return (
//     <div>
//       <h1>Welcome to My App</h1>
    
//       <Greeting name="Munazza" />
//     </div>
//   );

//  }

 import Show from "./Show";//Question 2

 function App(){
  return (
    <div>
      <h1>Student Details</h1>
      <Show
        name="Munazza" 
        marks={95} 
        message="Keep up the great work!" 
      />
    </div>
  );
 }
export default App;

