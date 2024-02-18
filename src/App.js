import logo from './logo.svg';
import './App.css';

function Header(){
  return <h1>this is a header.</h1>
}
function App() {
  let title = "main application";

  return <Header />;
  // (
  //   <div className="App">
  //     <header className="App-header">
  //      <p>{title}</p>
  //     </header>
  //   </div>
  // )
}

export default App;
