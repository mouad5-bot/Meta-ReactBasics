import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Promo from './components/Promo';
import logo from './assets/logo.jpg';
import InputComponent from './state/InputComponent';
import RegisterForm from './state/RegisterForm';

function Logo (props){
  const logoPic = <img src={logo} />;
  return logoPic;
}

function App() {
  const date = new Date();
  return (
    <div className="App"> 
        <Nav />
        <Promo msg={date.toLocaleTimeString()} />
        {/* <Logo /> */}
        <Footer />

        <button onClick={function() {console.log('first example')}}>
          An inline anonymous ES5 function event handler
        </button>
        <hr />
        <InputComponent />
        <hr />
        <RegisterForm />
    </div>
  ); 
};

export default App;





// function App() {
//   function handleClick() {
//     let randomNum = Math.floor(Math.random() * 3) + 1
//     console.log(randomNum)
//     let userInput = prompt('type a number');
//     alert(`Computer number: ${randomNum}, Your guess: ${userInput}`)
//   }
  
//   return (
//     <div>
//       <h1>Task: Add a button and handle a click event</h1>
//       <button onClick={handleClick} >Guess the number between 1 and 3</button>
//     </div>
//   );
// }

// export default App;

