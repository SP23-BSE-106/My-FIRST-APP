
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

//  import Show from "./Show";//Question 2

//  function App(){
//   return (
//     <div>
//       <h1>Student Details</h1>
//       <Show
//         name="Munazza" 
//         marks={95} 
//         message="Keep up the great work!" 
//       />
//     </div>
//   );
//  }


// import Question3 from "./Question3";// Question3
// function App(){
//   return (
//     <div>
//       < Question3/>
//     </div>
//   );
// }
// import Login from "./Login";//  Question4

// function App() {
//   const handleLogin = () => {
//     alert("Welcome");
//   };

//   return (
//     <div>
//       <Login isLoggedIn={true} name="Munazza" />
//       <Login isLoggedIn={false} onLogin={handleLogin} />
//     </div>
//   );
// }
import Box from "./Box";
function App(){
  return (
    <div>
      <h1>Dynamic Color Buttons</h1>
      
      <Box color="red" />
      <Box color="blue" />
      <Box color="green" />
    </div>
  );
}
export default App;


