
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
// import Box from "./Box";//Question 5
// function App(){
//   return (
//     <div>
//       <h1>Dynamic Color Buttons</h1>
      
//       <Box color="red" />
//       <Box color="blue" />
//       <Box color="green" />
//     </div>
//   );
// }
// import Admin from "./Admin";//Question 6
// function App() {
//   const userRole = "admin"; 
//   return <Admin userRole={userRole}/>;
// }
import Header from "./Header";//  question7
import Body from "./Body";
import Footer from "./Footer";
function App(){
  const bodyContent = "This is the content for the body of my application.";

  return (
    <div>
      <Header />
      <Body content={bodyContent} />
      <Footer />
    </div>
  );
}
export default App;


